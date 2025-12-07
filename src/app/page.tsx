import { Landing, NextScreenData } from '@/components/Landing';
import { MessageCircle, Send } from 'lucide-react';

const headerPhrase = '15 лет опыта. Более 2000 завершенных сделок';
const contact = '+6680-151-31-11';

const nextScreenData: NextScreenData = {
	title:
		'🔑 Мы поможем подобрать апартаменты и сопроводим сделку до получения ключей и документов.',
	description:
		'Оставьте контакт и мы пришлем каталог недвижимости. Подберем объекты под вас и запланируем экскурсию. Пишите, звоните.',
	question: 'Куда отправить каталог недвижимости Паттайи?',
	options: [
		{
			label: 'Telegram',
			icon: <Send className='h-4 w-4' />,
			buttonColor: '#1c4a99',
		},
		{
			label: 'WhatsApp',
			icon: <MessageCircle className='h-4 w-4' />,
			buttonColor: '#0a8f72',
		},
	],
	consent: (
		<span>
			Я согласен на{' '}
			<span className='text-pink-500 underline'>
				обработку персональных данных
			</span>{' '}
			согласно{' '}
			<span className='text-pink-500 underline'>
				политике конфиденциальности
			</span>
		</span>
	),
};

export default function HomePage() {
	return (
		<Landing
			headerPhrase={headerPhrase}
			heroImage='/assets/images/image.webp'
			heroHeading='📘 Отправим каталог недвижимости Паттайи и поможем с выбором.'
			heroDescription='🚗 Заберем вас от отеля и за 3 часа покажем реальные и выгодные варианты, достойные внимания.'
			heroSupport='Мы отправим каталог моментально, и менеджер свяжется в WhatsApp или Telegram.'
			buttonLabel='Получить каталог'
			contact={contact}
			nextScreen={nextScreenData}
		/>
	);
}
