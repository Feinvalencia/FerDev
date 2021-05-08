import AllLinks from "./links";

const Links = {
	Inicio: AllLinks.home.en,
	technology: AllLinks.technology.en,
	solutions: AllLinks.solutions.en,
	about: AllLinks.about.en,
	legal: AllLinks.legal.en,
	contact: AllLinks.contact.en,
	tour: AllLinks.tour.en,
	thanks: AllLinks.thanks.en,
	thanksTour: AllLinks.thanksTour.en,
}

const DATA = {
	Menu: {
		home: {
			link: Links.Inicio,
			text: "Inicio",
		},
		technology: {
			link: Links.technology,
			text: "El núcleo",
		},
		solutions: {
			link: Links.solutions,
			text: "Solución",
		},
		about: {
			link: Links.about,
			text: "Acerca de",
		},
		contact: {
			link: Links.contact,
			text: "Empecemos",
		},
	},
	Footer: {
		text: "Reactsys es una empresa moderna de desarrollo de aplicaciones que construye infraestructuras en línea.",
		Menu: {
			contact: {
				text: "Contacto",
			},
		},
		subscribeLink:{
			title: "Lorem Ipsum is simply dummy text",
			text: "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy texts",
			linkText: "Lorem Ipsum is simply",
			link: Links.tour,
		},
	},
	Cookie: {
		link: Links.legal,
		linkText : "Aprende más",
		text: "Usamos cookies para asegurarnos de que obtenga la mejor experiencia en nuestro sitio web.",
		buttonText: "Estoy de acuerdo",
	},
	PageHome: {
		seo:{
			title: 'Reactsys | Infraestructura ágil para marcas modernas 🚀',
			description: 'Reactsys es una empresa de desarrollo de aplicaciones moderna que construye infraestructuras en línea.',
		},
		cover:{
			titleHtml: "Infraestructura ágil <br/> para marcas modernas",
		},
		specialText:{
			text: "Construir marcas modernas significa tener una infraestructura digital",
			description: "Reactsys es una empresa moderna de desarrollo de aplicaciones que construye plataformas en línea. Desde la primera etapa de investigación hasta la fase de mantenimiento posterior a la implementación, trabajamos a la perfección con su empresa para enfrentar cualquier desafío de desarrollo que tenga. Como una navaja suiza, nuestras soluciones son ágiles, ligeras y adaptables a su negocio, ritmo y protocolos de trabajo.",
		},
		textAndWindowsData: [
			{
				title: "Corazón digital",
				description: "Todos sus datos están en un corazón digital, seguro y sólido, un centro dinámico todo incluido, que le brinda acceso, control y producción completos.",
				linkText: "Descubre nuestro núcleo",
				link: Links.technology,
			},{
				title: "Una infraestructura versátil.",
				description: "Administre su contenido y marca como productos dinámicos. A través de nuestro diseño de estructura de contenido central y la integración de API, su producto digital se pone en línea donde se puede implementar en todos los dispositivos y plataformas.",
				linkText: "Mira nuestras soluciones",
				link: Links.solutions,
			},{
				title: "Tecnología de punta",
				description: "Una solución escalable de vanguardia para agregar, formular y entregar sus estructuras digitales y de contenido a su base de usuarios.",
				linkText: "Sobre nosotros",
				link: Links.about,
			},
		],
		logosText:{
			titleHtml: "Usado por la mayoría de las compañías Fortune 500",
			description: "Nuestros productos se basan en ReactJS, la misma tecnología que Adobe, Airbnb, Amazon Video, Uber, Facebook, WhatsApp, Instagram, Dropbox, Netflix, Salesforce, NFL, New York Times, Atlassian y muchos más. ¡Suficientemente estable para más de 5 mil millones de usuarios!",
		},
		nextSectionData: {
			link: Links.technology,
			text: "Tecnología",
		},
	},
	PageTechnology: {
		seo:{
			title: 'El Nucleo | ReactSys 🚀',
			description: 'Una infraestructura versátil basada en ReactJS y NodeJS, repleta de funcionalidades.',
		},
		cover:{
			titleHtml: "Un corazón digital </br> para gobernarlos a todos",
			subtitle: "Una infraestructura versátil basada en ReactJS y NodeJS, repleta de funcionalidades, lista para ser adaptada a su modelo de negocio e implementada de forma segura antes que otros.",
			// subtitle: "A versatile core structure based on ReactJS, repleted with functionalities to build and deploy before others.",
		},
		numberAndWindowsData:[
			{
				title: "Datos centralizados",
				description: "Almacenar y proteger los datos de su empresa en un centro de datos central permite la escalabilidad, la seguridad y el rendimiento en todos los ámbitos. Podrá actualizar, editar y administrar todos los dispositivos, páginas y aplicaciones asociados con solo presionar un botón.",
			},
			{
				title: "API de integración de modelo de negocio",
				description: "Desarrollamos nuestras soluciones desde cero y las adaptamos específicamente a nuestros clientes. Esto significa que es una funcionalidad sólida, exclusiva y de base privada de una interfaz personalizable precompilada que lo ayudará a ahorrar dinero y tiempo de desarrollo.",
			},
			{
				title: "Seguridad de confianza cero",
				description: "Ofrecemos las últimas arquitecturas de seguridad y modelos de perfil de confianza. Nuestra tecnología integra MFA, un valor central para Zero Trust Security que requiere más de una evidencia para autenticar a un usuario.",
			},
			{
				title: "Crece como necesites",
				description: "Reactsys se esfuerza por la adaptabilidad orgánica utilizando las métricas de datos, flujos de trabajo y estructuras propias de la empresa para proporcionar un crecimiento estable y funcionalidad según sea necesario cuando sea necesario.",
			},
			{
				title: "Rendimiento como un profesional",
				description: "Creamos productos de rendimiento excepcional que aumentan la retención de visitantes al tiempo que mejoran la experiencia y satisfacción general del usuario.",
			},
			{
				title: "Metodología ágil",
				description: "Versátil y adaptable para encajar la pieza correcta en el rompecabezas correcto, Reactsys mantiene la transparencia con el cliente para cambiar o mantener gradualmente una estructura de marca, o para solucionar o completar rápidamente el desafío requerido. Los bloques binarios se transforman para adaptarse a las necesidades del cliente.",
			},
			{
				title: "Implemente más rápido y sea encontrado antes de la competencia",
				description: "Nuestra estructura principal se compone de funcionalidades que ahorran tiempo en el desarrollo. Reactsys también dedicará un equipo de ingenieros expertos de ReactJS a su proyecto para garantizar que su marca y sus soluciones superen el campo",
			},
			{
				title: "Integraciones API RESTful",
				description: "No reinvente la rueda e integre API de terceros con Reactsys. Es tan ágil y flexible como lo necesita. ",
			},
		],
		textLoop: ["Bogota", "Cali", "Medellin"],
		nextSectionData: {
			link: Links.solutions,
			text: "Solución",
		},
	},
	PageSolutions: {
		seo:{
			title: 'Solución | Reactsys.com 🚀',
			description: 'Dar forma a modelos de negocio digitales basados en tecnologías disruptivas.',
		},
		cover:{
			titleHtml: "Define la sociedad del mañana",
			subtitle: "Forme modelos de negocios digitales basados ​​en tecnologías disruptivas para cumplir con todos los puntos de referencia clave de la próxima aplicación imprescindible.",
		},
		borderText: "¡Descubra cómo nuestras soluciones pueden mejorar sus ideas al siguiente nivel!",
		approachData: [
			{
				// title: "Brands",
				text: "Necesidades</br>Comerciales",
			},
			{
				// title: "API",
				text: "Reactsys",
			},
			{
				// title: "US",
				text: "Productos</br>Digitales",
			},
		],
		titleAndDescription: {
			title: "Reactsys trabaja intuitivamente en las industrias líderes con las últimas tendencias.",
			description: "Nuestra infraestructura central codifica la base para la próxima plataforma y el único límite es su imaginación.",
		},
		cards: [
			{
				// windowTitle: 'Discovery',
				title: 'Salud',
				text: 'Biotecnología, gestión de datos de salud y salud personalizada.',
			},{
				// windowTitle: 'Strategy',
				title: 'Medios de comunicación',
				text: 'Juegos, realidad virtual y transmisión de televisión.ty, and streaming television.',
			},{
				// windowTitle: 'Design',
				title: 'Retail de consumo',
				text: 'Comercio electrónico, minoristas emergentes y venta minorista personalizada.',
			},{
				// windowTitle: 'Development',
				title: 'Finanzas',
				text: 'Fintech y criptomoneda.',
			},{
				// windowTitle: 'Testing',
				title: 'Bienes raíces',
				text: 'Corretaje en línea, servicios de diseño en línea y tecnología de bienes raíces.',
			},{
				// windowTitle: 'Deployment',
				title: 'Hospitalidad',
				text: 'Hoteles y proveedores de alimentos sostenibles.',
			}
		],
		titleAndDescription2: {
			title: "Sea extraordinario e impulsado a crear algo disruptivo e innovador",
			description: "Reactsys proporcionará soluciones completas para el cliente, consultoría y conocimientos técnicos a nuestros clientes empresariales comprometidos. Nos aseguraremos de que su proyecto esté en el camino correcto, en cada paso del camino.",
		},
		textAndImageData: [
			{
				title: "Sitios web",
				description: "Desarrolle e implemente grandes aplicaciones web escalables que puedan usar grandes cantidades de datos variables en tiempo extra sin recargar su navegador y seguir siendo eficientes y livianos.",
			},
			{
				title: "Aplicaciones móviles",
				description: "Cree aplicaciones para Android e iOS con React Native. Combina las mejores partes del desarrollo nativo con React. Es la mejor biblioteca de JavaScript de su clase para crear interfaces de usuario. React Native se está utilizando en miles de aplicaciones principales.",
			},
		],
		// awardsList:[
		// 	{
		// 		text: "Webby Awards",
		// 	},
		// 	{
		// 		text: "Awwwards",
		// 	},
		// 	{
		// 		text: "FWA",
		// 	},
		// ],
		// titleTech: "We provide a 360º solutions to build high-quality digital products.",
		titleTech: "Nuestras soluciones digitales son únicas y se basan únicamente en nuestro núcleo",
		// techs: ["Strategy", "Design", "Development", "Maintenance"],
		// contactLink: 'Know more',
		nextSectionData: {
			link: Links.contact,
			text: "Contacto",
		},
		textLoop: ["Estrategia", "Diseño", "Desarrollo"],
	},
	PageAbout: {
		seo:{
			title: 'Acerca de | Reactsys.com 🚀',
			description: 'Reactsys es una empresa moderna que fabrica productos en línea.',
		},
		specialText:{
			text: "Estas en buenas manos",
		},
		coverDescription: "En una nueva era donde todo está conectado, Internet es una parte central de nuestras vidas y las marcas tienen su lugar entre nosotros. Su capacidad para adaptar su negocio a una sociedad moderna basada en la tecnología es la clave de su éxito. La intersección entre los objetivos de la marca y las necesidades del usuario es nuestro alcance de trabajo.",
		// arrowTitle1: "Approach",
		arrowTitle2: "Nosotros creemos en:",
		dataList:[
			{
				text: "Sueño grande.",
			},
			{
				text: "Juega el juego largo.",
			},
			{
				text: "Los usuarios son siempre los primeros.",
			},
			{
				text: "Nunca asumas nada.",
			},
			{
				text: "Narración de su producto.",
			},
			{
				text: "Tome decisiones basadas en datos.",
			},
		],
		arrowTitle3: "Nos encantaria trabajar contigo!",
		joinUsData: {
			title: "Únete a nosotros!",
			description: "Siempre estamos abiertos a nuevos talentos. Si está buscando un lugar que valore su experiencia, pasión o deseo de aprender.",
		},
		careers: [
			{
				text: "¡Escribenos!",
				link: "Feinvalencia@gmail.com",
			},
		],
		nextSectionData: {
			link: Links.contact,
			text: "¡Hablemos!",
		},
	},
	PageContact: {
		seo:{
			title: 'Contacto | Reactsys.com 🚀',
			description: 'Reactsys es una empresa moderna que crea productos en línea.',
		},
		title: 'Contactanos.',
		thanksLink: Links.thanks,
	},
	PageThanks: {
		
	},
	PageTour: {
		seo:{
			title: 'Solicite una demostración | Reactsys.com  🚀',
			description: 'Reactsys es una empresa moderna que crea productos en línea.',
		},
		title: 'Solicite una demostración.',
		thanksLink: Links.thanksTour,
	},
	Page404: {
		seo:{
			title: 'Página no encontrada | Reactsys.com',
			description: 'Página no encontrada | Reactsys.com',
		},
		title: 'Página no encontrada',
	},
	PageLegal: {
		seo:{
			title: 'Términos legales | Reactsys.com',
			description: 'Términos legales | Reactsys.com',
		},
	},
}


export default DATA;