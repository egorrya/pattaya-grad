"use client"

import {
  ComponentProps,
  type ChangeEvent,
  type KeyboardEvent,
  createContext,
  useEffect,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react"
import flags from "react-phone-number-input/flags"

import { cn } from "@/lib/utils"
import {
  DEFAULT_PHONE_COUNTRY_ISO,
  PHONE_COUNTRIES,
  buildWhatsAppContact,
  formatWhatsAppDisplayValue,
  getPhoneCountryNationalInputMaxLength,
  getPhoneCountryByIso,
  normalizePhoneNationalDigits,
  type PhoneCountryIso,
} from "@/lib/phone"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
} from "@/components/ui/combobox"
import { Input } from "@/components/ui/input"
import { GlobeIcon } from "lucide-react"

type PhoneInputSize = "sm" | "default" | "lg"

const PhoneInputContext = createContext<{
  variant: PhoneInputSize
  popupClassName?: string
  scrollAreaClassName?: string
}>({
  variant: "default",
  popupClassName: undefined,
  scrollAreaClassName: undefined,
})

type PhoneInputProps = Omit<
  ComponentProps<"input">,
  "onChange" | "value" | "ref"
> & {
  onChange?: (value: string) => void
  onCountryChange?: (country: PhoneCountryIso | null) => void
  value?: string
  defaultCountry?: PhoneCountryIso
  countries?: readonly PhoneCountryIso[]
  labels?: Record<string, string>
  variant?: PhoneInputSize
  popupClassName?: string
  scrollAreaClassName?: string
  limitMaxLength?: boolean
}

function PhoneInput({
  className,
  variant,
  popupClassName,
  scrollAreaClassName,
  onChange,
  value,
  defaultCountry = DEFAULT_PHONE_COUNTRY_ISO,
  countries,
  labels,
  onCountryChange,
  limitMaxLength = true,
  ...props
}: PhoneInputProps) {
  const phoneInputSize = variant || "default"
  const inputRef = useRef<HTMLInputElement | null>(null)
  const resolvedPopupClassName = cn(
    "w-[16.5rem] max-w-[calc(100vw-1rem)]",
    popupClassName
  )
  const countryOptions = useMemo(() => {
    const allowedCountries = countries?.length
      ? PHONE_COUNTRIES.filter((country) =>
          countries.includes(country.iso as PhoneCountryIso)
        )
      : PHONE_COUNTRIES

    return allowedCountries.map((country) => ({
      label: labels?.[country.iso] ?? country.label,
      value: country.iso as PhoneCountryIso,
      dialCode: country.dialCode,
    }))
  }, [countries, labels])
  const [selectedCountryIso, setSelectedCountryIso] =
    useState<PhoneCountryIso>(defaultCountry)

  useEffect(() => {
    setSelectedCountryIso(defaultCountry)
  }, [defaultCountry])

  const selectedCountry =
    getPhoneCountryByIso(selectedCountryIso) ??
    getPhoneCountryByIso(DEFAULT_PHONE_COUNTRY_ISO) ??
    PHONE_COUNTRIES[0]
  const displayedValue = formatWhatsAppDisplayValue(value || "", selectedCountry)

  const handleCountryChange = (country: PhoneCountryIso) => {
    setSelectedCountryIso(country)
    onCountryChange?.(country)
    if (!props.disabled) {
      requestAnimationFrame(() => {
        inputRef.current?.focus()
      })
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const normalizedDigits = normalizePhoneNationalDigits(
      event.target.value,
      selectedCountry,
    )
    onChange?.(
      normalizedDigits
        ? buildWhatsAppContact(normalizedDigits, selectedCountry)
        : "",
    )
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    props.onKeyDown?.(event)
    if (event.defaultPrevented || props.disabled) {
      return
    }

    if (event.key !== "Backspace" && event.key !== "Delete") {
      return
    }

    const input = inputRef.current
    if (!input) {
      return
    }

    const { selectionStart, selectionEnd, value: currentValue } = input
    if (selectionStart === null || selectionEnd === null) {
      return
    }

    const currentDigits = normalizePhoneNationalDigits(
      currentValue,
      selectedCountry,
    )
    if (!currentDigits) {
      return
    }

    const digitsBeforeStart = normalizePhoneNationalDigits(
      currentValue.slice(0, selectionStart),
      selectedCountry,
    )
    const digitsBeforeEnd = normalizePhoneNationalDigits(
      currentValue.slice(0, selectionEnd),
      selectedCountry,
    )

    let nextDigits = currentDigits
    if (selectionStart !== selectionEnd) {
      nextDigits =
        digitsBeforeStart.length === 0
          ? currentDigits.slice(digitsBeforeEnd.length)
          : `${currentDigits.slice(0, digitsBeforeStart.length)}${currentDigits.slice(digitsBeforeEnd.length)}`
    } else if (event.key === "Backspace") {
      if (digitsBeforeStart.length === 0) {
        return
      }
      nextDigits = currentDigits.slice(0, digitsBeforeStart.length - 1)
    } else if (event.key === "Delete") {
      if (digitsBeforeStart.length >= currentDigits.length) {
        return
      }
      nextDigits = `${currentDigits.slice(0, digitsBeforeStart.length)}${currentDigits.slice(digitsBeforeStart.length + 1)}`
    }

    event.preventDefault()
    onChange?.(nextDigits ? buildWhatsAppContact(nextDigits, selectedCountry) : "")
  }

  return (
    <PhoneInputContext.Provider
      value={{
        variant: phoneInputSize,
        popupClassName: resolvedPopupClassName,
        scrollAreaClassName,
      }}
    >
      <div
        className={cn(
          "flex w-full",
          props["aria-invalid"] &&
            "[&_*[data-slot=combobox-trigger]]:border-destructive [&_*[data-slot=combobox-trigger]]:ring-destructive/50",
          className
        )}
      >
        <CountrySelect
          disabled={props.disabled}
          value={selectedCountryIso}
          options={countryOptions}
          onChange={handleCountryChange}
        />
        <Input
          ref={inputRef}
          className={cn(
            "rounded-s-none focus:z-1",
            variant === "sm" && "h-7",
            variant === "lg" && "h-9",
            className
          )}
          {...props}
          value={displayedValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          maxLength={
            limitMaxLength
              ? getPhoneCountryNationalInputMaxLength(selectedCountry)
              : undefined
          }
        />
      </div>
    </PhoneInputContext.Provider>
  )
}

type CountryEntry = {
  label: string
  value: PhoneCountryIso
  dialCode: string
}

type CountrySelectProps = {
  disabled?: boolean
  value: PhoneCountryIso
  options: CountryEntry[]
  onChange: (country: PhoneCountryIso) => void
}

function CountrySelect({
  disabled,
  value: selectedCountry,
  options: countryList,
  onChange,
}: CountrySelectProps) {
  const { popupClassName } = useContext(PhoneInputContext)
  const [searchValue, setSearchValue] = useState("")
  const normalizedSearchValue = searchValue.toLowerCase().trim()

  const filteredCountries = useMemo(() => {
    if (!normalizedSearchValue) return countryList
    return countryList.filter(({ label }) =>
      String(label ?? "").toLowerCase().includes(normalizedSearchValue)
    )
  }, [countryList, normalizedSearchValue])

  return (
    <Combobox
      items={filteredCountries}
      value={selectedCountry || ""}
      onValueChange={(country: PhoneCountryIso | null) => {
        if (country) {
          onChange(country)
        }
      }}
    >
      <ComboboxTrigger
        render={
          <button
            type="button"
            className={cn(
              "border-input bg-white text-slate-900 rounded-s-lg rounded-e-none flex min-w-[4.25rem] items-center gap-1 border border-e-0 px-1.5 py-0 leading-none shadow-xs transition hover:bg-transparent focus:z-10 data-pressed:bg-transparent",
              disabled && "opacity-50"
            )}
            disabled={disabled}
          >
            <span className="sr-only">
              <ComboboxValue />
            </span>
            <span className="flex items-center gap-2">
              <FlagComponent
                country={selectedCountry}
                countryName={selectedCountry}
              />
              <span className="text-sm font-medium">
                {selectedCountry
                  ? `+${countryList.find((country) => country.value === selectedCountry)?.dialCode ?? ""}`
                  : '🌐'}
              </span>
            </span>
          </button>
        }
      />
      <ComboboxContent
        className={cn(
          "w-xs *:data-[slot=input-group]:bg-transparent",
          popupClassName
        )}
      >
        <ComboboxInput
          placeholder="Поиск страны"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          showTrigger={false}
          className="border-input focus-visible:border-border rounded-none border-0 px-0 py-2.5 shadow-none ring-0! outline-none! focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <ComboboxSeparator />
        <ComboboxEmpty className="px-4 py-2.5 text-sm">
          Страна не найдена.
        </ComboboxEmpty>
      <ComboboxList className="overscroll-contain">
        {filteredCountries.map((item: CountryEntry) => (
          <ComboboxItem
            key={item.value}
            value={item.value}
            className="flex items-center gap-2"
          >
            <FlagComponent
              country={item.value}
              countryName={String(item.label ?? "")}
            />
            <span className="flex-1 text-sm">{item.label ?? item.value}</span>
            <span className="text-foreground/50 text-sm">{`+${item.dialCode}`}</span>
          </ComboboxItem>
        ))}
      </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

function FlagComponent({
  country,
  countryName,
}: {
  country?: string
  countryName?: string
}) {
  const Flag = country ? flags[country as keyof typeof flags] : undefined

  return (
    <span className="flex h-4 w-4 items-center justify-center [&_svg:not([class*='size-'])]:size-full! [&_svg:not([class*='size-'])]:rounded-[5px]">
      {Flag ? (
        <Flag title={countryName ?? country ?? ""} />
      ) : (
        <GlobeIcon className="size-4 opacity-60" />
      )}
    </span>
  )
}

export { PhoneInput }
