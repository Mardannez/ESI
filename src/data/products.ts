export type ProductAvailability = "Disponible" | "Bajo pedido";
export type RiskType = "electrico" | "corte" | "quimico" | "termico" | "altura" | "senalizacion" | "ergonomia";

export interface Product {
  id: number;
  code: string;
  name: string;
  originalName: string;
  category: string;
  categorySlug: string;
  subcategory: string;
  riskTypes: RiskType[];
  brand: string;
  price: number | null;
  availability: ProductAvailability;
  image: string;
  images?: string[];
  shortDescription: string;
  description: string;
  features: string[];
  applications: string[];
  standard: string;
  seoKeywords: string[];
  cta: string;
  featured?: boolean;
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  icon: string;
  description: string;
  count: number;
  image: string;
  riskTypes: RiskType[];
}

export const products: Product[] = [
  {
    "id": 1,
    "code": "ESI-CUERPO-001",
    "name": "Chaleco JOPZ malla con cinta reflectiva y cierre de velcro",
    "originalName": "CHALECO JOPZ MALLA VERDE CINTA REFLECTIVA CON VELCRO",
    "category": "Protección para cuerpo",
    "categorySlug": "proteccion-para-cuerpo",
    "subcategory": "Alta visibilidad",
    "riskTypes": [
      "senalizacion",
      "termico",
      "ergonomia"
    ],
    "brand": "JOPZ",
    "price": null,
    "availability": "Disponible",
    "image": "https://images.unsplash.com/photo-1602886019766-b558d889d0e3",
    "shortDescription": "Chaleco reflectivo JOPZ de malla liviana con cierre de velcro y bandas reflectivas, ideal para mejorar la visibilidad del trabajador en zonas de riesgo o tránsito vehicular.",
    "description": "Chaleco reflectivo diseñado para aumentar la visibilidad del trabajador durante labores en exteriores, áreas de riesgo, trabajos nocturnos o espacios con poca iluminación. Su material liviano tipo malla permite usarlo cómodamente sobre la ropa de trabajo, favoreciendo la ventilación durante jornadas prolongadas.",
    "features": [
      "Material liviano y transpirable tipo malla.",
      "Color de alta visibilidad.",
      "Bandas reflectivas frontales y horizontales.",
      "Cierre frontal con velcro.",
      "Diseño cómodo para uso prolongado.",
      "Disponible en diferentes tallas.",
      "Ideal para zonas de tránsito vehicular y trabajos en exteriores.",
      "Aplicaciones: Construcción, Mantenimiento vial, Logística, Transporte"
    ],
    "applications": [
      "Construcción",
      "Mantenimiento vial",
      "Logística",
      "Transporte",
      "Almacenes",
      "Industria en general",
      "Trabajos nocturnos",
      "Zonas con tránsito de maquinaria o vehículos"
    ],
    "standard": "N/A.",
    "seoKeywords": [
      "chaleco reflectivo",
      "chaleco de seguridad",
      "chaleco alta visibilidad",
      "chaleco JOPZ",
      "chaleco con velcro"
    ],
    "cta": "Solicita cotización del Chaleco JOPZ malla con cinta reflectiva y cierre de velcro y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": true
  },
  {
    "id": 2,
    "code": "ESI-MANOS-001",
    "name": "Guante dieléctrico JUBA Voltium Clase 00 / 1,000 voltios",
    "originalName": "GUANTE DIELÉCTRICO X 1,000 VOLTIOS CLASE 00 JUBA",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Guantes dieléctricos",
    "riskTypes": [
      "electrico",
      "corte",
      "quimico",
      "termico"
    ],
    "brand": "JUBA",
    "price": null,
    "availability": "Disponible",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_1c3dc06f7-1777881775479.png",
    "shortDescription": "Guante dieléctrico de látex natural JUBA para protección eléctrica, diseñado para labores con riesgo de contacto con corriente y uso junto con sobreguante de cuero.",
    "description": "Guante dieléctrico fabricado en látex natural con propiedades aislantes para trabajos eléctricos. Está orientado a proteger las manos frente al contacto accidental con conductores energizados y debe utilizarse con sobreguante de cuero para proteger el guante dieléctrico contra perforaciones, cortes y abrasión.",
    "features": [
      "Fabricado en látex natural con altas propiedades dieléctricas.",
      "Espesor indicado en catálogo: 1.50 mm.",
      "Disponible en tallas 8/M, 9/L, 10/XL y 11/XXL.",
      "Uso recomendado en trabajos eléctricos.",
      "Requiere sobreguante de cuero para protección mecánica.",
      "Compatible con guante interior de Nomex o Kevlar para absorción de sudor y protección adicional.",
      "Categoría RC: resistente a ácidos, aceite, ozono y bajas temperaturas.",
      "Normativa: EN 60903:2003, ASTM D120, JIS T8112, IEC/CEI 60903.",
      "Aplicaciones: Trabajos eléctricos, Mantenimiento industrial, Baja, media y alta tensión según validación técnica, Personal electricista"
    ],
    "applications": [
      "Trabajos eléctricos",
      "Mantenimiento industrial",
      "Baja, media y alta tensión según validación técnica",
      "Personal electricista",
      "Operaciones donde exista riesgo de contacto eléctrico"
    ],
    "standard": "EN 60903:2003, ASTM D120, JIS T8112, IEC/CEI 60903.",
    "seoKeywords": [
      "guante dieléctrico JUBA",
      "guante aislante eléctrico",
      "guante clase 00",
      "guante para electricista",
      "guante de látex dieléctrico"
    ],
    "cta": "Solicita cotización del Guante dieléctrico JUBA Voltium Clase 00 / 1,000 voltios y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": true
  },
  {
    "id": 3,
    "code": "ESI-MANOS-002",
    "name": "Guante dieléctrico JUBA Clase 0 / prueba 5,000 voltios",
    "originalName": "GUANTE DIELÉCTRICO X 5,000 VOLTIOS CLASE 0 JUBA",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Guantes dieléctricos",
    "riskTypes": [
      "electrico",
      "corte",
      "quimico",
      "termico"
    ],
    "brand": "JUBA",
    "price": null,
    "availability": "Disponible",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_1c3dc06f7-1777881775479.png",
    "shortDescription": "Guante dieléctrico JUBA Clase 0 en látex natural, diseñado para trabajos eléctricos de baja tensión y protección frente al contacto accidental con conductores energizados.",
    "description": "Guante dieléctrico fabricado en látex natural de alta calidad, diseñado para labores eléctricas de baja tensión. Proporciona aislamiento eléctrico y protección frente al contacto accidental con conductores energizados. Para conservar su integridad, se recomienda utilizarlo junto con sobreguante de cuero contra cortes, perforaciones y abrasión.",
    "features": [
      "Látex natural de alta calidad.",
      "Altas propiedades dieléctricas.",
      "Categoría RC: resistente a ácidos, aceites, ozono y bajas temperaturas.",
      "Compatible con sobreguantes de cuero.",
      "Disponible en tallas 8/M, 9/L, 10/XL y 11/XXL.",
      "Equipo de Protección Personal Categoría III.",
      "Uso recomendado en baja tensión.",
      "Normativa: EN 60903:2003, ASTM D120, JIS T8112, IEC/CEI 60903.",
      "Aplicaciones: Electricidad de baja tensión, Mantenimiento eléctrico, Tableros eléctricos, Instalaciones industriales"
    ],
    "applications": [
      "Electricidad de baja tensión",
      "Mantenimiento eléctrico",
      "Tableros eléctricos",
      "Instalaciones industriales",
      "Operaciones con conductores energizados según procedimiento seguro"
    ],
    "standard": "EN 60903:2003, ASTM D120, JIS T8112, IEC/CEI 60903.",
    "seoKeywords": [
      "guante dieléctrico clase 0",
      "guante JUBA 5000 voltios",
      "guante eléctrico baja tensión",
      "guante aislante eléctrico",
      "guante para tableros eléctricos"
    ],
    "cta": "Solicita cotización del Guante dieléctrico JUBA Clase 0 / prueba 5,000 voltios y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 4,
    "code": "ESI-MANOS-003",
    "name": "Guante anticorte gris PU en palma JUBA",
    "originalName": "GUANTE ANTICORTE GRIS PU GRIS EN PALMA JUBA",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Guantes anticorte",
    "riskTypes": [
      "corte",
      "electrico",
      "quimico",
      "termico"
    ],
    "brand": "JUBA",
    "price": 800,
    "availability": "Disponible",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_1c3dc06f7-1777881775479.png",
    "shortDescription": "Guante anticorte JUBA con fibra K-Rock y recubrimiento de poliuretano en palma, ideal para manipulación de piezas cortantes con buen agarre y destreza.",
    "description": "Guante anticorte JUBA 4570RF Power Cut fabricado con fibra textil K-Rock y recubrimiento de poliuretano en la palma. Está diseñado para trabajos con riesgo de corte medio/alto, ofreciendo comodidad, transpirabilidad, precisión de movimiento y agarre en ambientes secos o ligeramente húmedos.",
    "features": [
      "Fibra de alta resistencia al corte K-Rock.",
      "Recubrimiento de poliuretano en la palma.",
      "Refuerzo de nitrilo entre pulgar e índice.",
      "Excelente transpirabilidad y confort.",
      "Óptimo agarre en superficies secas y ligeramente húmedas.",
      "Resistencia al calor por contacto hasta 100 °C durante 15 segundos.",
      "Compatible con pantallas táctiles.",
      "Nivel de corte D según ISO 13997.",
      "Normativa: EN 388:2016 + A1:2018, EN 407:2020.",
      "Aplicaciones: Automoción, Aeronáutica, Mantenimiento industrial, Montaje"
    ],
    "applications": [
      "Automoción",
      "Aeronáutica",
      "Mantenimiento industrial",
      "Montaje",
      "Manipulación de piezas cortantes",
      "Fabricación de embalajes",
      "Trabajos mecánicos"
    ],
    "standard": "EN 388:2016 + A1:2018, EN 407:2020.",
    "seoKeywords": [
      "guante anticorte",
      "guante JUBA anticorte",
      "guante nivel corte D",
      "guante PU palma",
      "guante para piezas cortantes"
    ],
    "cta": "Solicita cotización del Guante anticorte gris PU en palma JUBA y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": true
  },
  {
    "id": 5,
    "code": "ESI-MANOS-004",
    "name": "Guante químico nitrilo verde sin forro 18 pulgadas Ansell 37-185",
    "originalName": "GUANTE QUÍMICO NITRILO VERDE SIN FORRO 18” ANSELL 37185",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Guantes químicos",
    "riskTypes": [
      "quimico",
      "electrico",
      "corte",
      "termico"
    ],
    "brand": "Ansell",
    "price": null,
    "availability": "Disponible",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_1dbd514a5-1765185557962.png",
    "shortDescription": "Guante químico Ansell AlphaTec Solvex 37-185 de nitrilo, con longitud extendida de 18 pulgadas para protección de manos y antebrazos frente a químicos peligrosos.",
    "description": "Guante químico Ansell AlphaTec Solvex 37-185 fabricado en nitrilo de alta resistencia. Su longitud extendida de 457 mm proporciona cobertura hasta la parte superior del codo, ofreciendo protección frente a una amplia gama de productos químicos, además de resistencia a la abrasión y comodidad para trabajos prolongados.",
    "features": [
      "Nitrilo de alta resistencia química.",
      "Longitud de 457 mm / 18 pulgadas.",
      "Cobertura hasta la parte superior del codo.",
      "Reutilizable.",
      "Excelente resistencia a la abrasión.",
      "Acabado tipo arena para mejorar el agarre.",
      "Sin flocado de algodón para reducir riesgo de contaminación.",
      "Adecuado para ambientes secos y húmedos.",
      "Disponible en tallas 7, 8, 9, 10 y 11.",
      "Color verde.",
      "Normativa: EN ISO 374-1:2016 Tipo A (AGJKLPT), EN ISO 374-5:2016, EN 388:2016, ISO 18889 G2, ANSI Nivel 4 de abrasión.",
      "Aplicaciones: Industria química, Petróleo y gas, Procesamiento de alimentos, Manipulación de sustancias químicas"
    ],
    "applications": [
      "Industria química",
      "Petróleo y gas",
      "Procesamiento de alimentos",
      "Manipulación de sustancias químicas",
      "Carga y descarga de productos",
      "Transferencia de líquidos",
      "Mantenimiento industrial",
      "Operaciones de proceso"
    ],
    "standard": "EN ISO 374-1:2016 Tipo A (AGJKLPT), EN ISO 374-5:2016, EN 388:2016, ISO 18889 G2, ANSI Nivel 4 de abrasión.",
    "seoKeywords": [
      "guante químico nitrilo",
      "guante Ansell 37185",
      "guante Solvex",
      "guante nitrilo 18 pulgadas",
      "guante para químicos"
    ],
    "cta": "Solicita cotización del Guante químico nitrilo verde sin forro 18 pulgadas Ansell 37-185 y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 6,
    "code": "ESI-MANOS-005",
    "name": "Guante baja temperatura látex en palma gris SHOWA 451",
    "originalName": "GUANTE BAJA TEMP LATEX EN PALM GRIS SHOWA",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Guantes térmicos",
    "riskTypes": [
      "termico",
      "electrico",
      "corte",
      "quimico"
    ],
    "brand": "SHOWA",
    "price": null,
    "availability": "Disponible",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_1c3dc06f7-1777881775479.png",
    "shortDescription": "Guante térmico SHOWA 451 para ambientes fríos, con aislamiento y recubrimiento de caucho natural en palma para mayor agarre y comodidad.",
    "description": "Guante térmico SHOWA 451 diseñado para climas fríos y aplicaciones de almacenamiento, distribución y logística. Cuenta con aislamiento térmico, forro sin costuras y recubrimiento de caucho natural en la palma, ofreciendo comodidad, agarre y resistencia a la abrasión. También protege frente al contacto con detergentes agresivos y alcoholes.",
    "features": [
      "Aislamiento térmico para ambientes fríos.",
      "Tejido sin costuras.",
      "Recubrimiento de caucho natural en la palma.",
      "Agarre rugoso para mejor manipulación.",
      "Flexible y transpirable.",
      "Resistente a la abrasión.",
      "Diseño ergonómico.",
      "Puño elástico contra entrada de suciedad y residuos.",
      "Materiales: acrílico, algodón y poliéster.",
      "Disponible en tallas 7/S, 8/M, 9/L y 10/XL.",
      "Normativa: EN 388:2016+A1:2018, EN 407:2020, EN 511:2006, EN ISO 21420:2020.",
      "Aplicaciones: Cámaras frigoríficas, Almacenamiento y distribución, Construcción, Carpintería"
    ],
    "applications": [
      "Cámaras frigoríficas",
      "Almacenamiento y distribución",
      "Construcción",
      "Carpintería",
      "Albañilería",
      "Señalización",
      "Demolición",
      "Conducción de maquinaria",
      "Recepción y despacho de mercancías"
    ],
    "standard": "EN 388:2016+A1:2018, EN 407:2020, EN 511:2006, EN ISO 21420:2020.",
    "seoKeywords": [
      "guante térmico frío",
      "guante SHOWA 451",
      "guante baja temperatura",
      "guante para cámara fría",
      "guante látex palma"
    ],
    "cta": "Solicita cotización del Guante baja temperatura látex en palma gris SHOWA 451 y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 7,
    "code": "ESI-MANOS-006",
    "name": "Guante para alta temperatura PIP 43-502",
    "originalName": "GUANTE PARA ALTA TEMPERATURA PIP® 43-502",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Guantes térmicos",
    "riskTypes": [
      "termico",
      "electrico",
      "corte",
      "quimico"
    ],
    "brand": "PIP",
    "price": null,
    "availability": "Disponible",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_1c3dc06f7-1777881775479.png",
    "shortDescription": "Guante PIP 43-502 para alta temperatura, fabricado en algodón de doble capa con recubrimiento de nitrilo EverGrip para protección térmica y agarre.",
    "description": "Guante para alta temperatura PIP 43-502 fabricado con tejido sin costuras de doble capa 100% algodón y recubrimiento de nitrilo EverGrip de doble cara. Está diseñado para brindar protección térmica, comodidad y agarre superior durante la manipulación de materiales calientes.",
    "features": [
      "Construcción sin costuras de doble capa.",
      "Fabricado en algodón de alta resistencia y transpirabilidad.",
      "Recubrimiento de nitrilo EverGrip resistente al derretimiento.",
      "Agarre superior mediante patrón texturizado.",
      "Diseño ambidiestro para prolongar vida útil.",
      "Puño tejido para mejor ajuste.",
      "Lavable a máquina.",
      "Disponible en tallas S a L.",
      "Material multicapa para mayor aislamiento térmico.",
      "Aplicaciones: Industria del vidrio, Fundiciones, Metalurgia, Fabricación de cerámica"
    ],
    "applications": [
      "Industria del vidrio",
      "Fundiciones",
      "Metalurgia",
      "Fabricación de cerámica",
      "Operaciones de forja",
      "Manipulación de materiales calientes"
    ],
    "standard": "N/A.",
    "seoKeywords": [
      "guante alta temperatura",
      "guante PIP 43-502",
      "guante calor contacto",
      "guante para fundición",
      "guante nitrilo EverGrip"
    ],
    "cta": "Solicita cotización del Guante para alta temperatura PIP 43-502 y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 8,
    "code": "ESI-MANOS-007",
    "name": "Guante cuero gris pulido eléctrico JOPZ",
    "originalName": "GUANTE CUERO GRIS PULIDO ELÉCTRICO JOPZ",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Guantes de cuero",
    "riskTypes": [
      "electrico",
      "corte",
      "quimico",
      "termico"
    ],
    "brand": "JOPZ",
    "price": null,
    "availability": "Disponible",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_1dbd514a5-1765185557962.png",
    "shortDescription": "Guante de cuero gris pulido JOPZ para trabajos eléctricos, mantenimiento industrial y manipulación de materiales, con doble palma reforzada.",
    "description": "Guante de cuero gris pulido eléctrico JOPZ diseñado para trabajos eléctricos, mantenimiento industrial y manipulación de materiales. Fabricado en cuero de alta calidad, proporciona protección, comodidad y resistencia al desgaste en aplicaciones de uso continuo. También puede utilizarse como sobreguante de protección mecánica para guantes dieléctricos, según procedimiento técnico.",
    "features": [
      "Cuero gris de alta calidad.",
      "Doble palma reforzada para protección adicional.",
      "Protección contra cortes y abrasión.",
      "Longitud extendida para mayor cobertura.",
      "Resistente al desgaste por uso constante.",
      "Excelente agarre y maniobrabilidad en tareas de precisión.",
      "Normativa: EN 388:2016.",
      "Aplicaciones: Mantenimiento eléctrico, Trabajos industriales, Manipulación de materiales, Protección de guantes dieléctricos como sobreguante"
    ],
    "applications": [
      "Mantenimiento eléctrico",
      "Trabajos industriales",
      "Manipulación de materiales",
      "Protección de guantes dieléctricos como sobreguante",
      "Construcción",
      "Servicios generales"
    ],
    "standard": "EN 388:2016.",
    "seoKeywords": [
      "guante cuero eléctrico",
      "guante JOPZ cuero",
      "sobreguante cuero",
      "guante para electricista",
      "guante cuero gris"
    ],
    "cta": "Solicita cotización del Guante cuero gris pulido eléctrico JOPZ y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 9,
    "code": "ESI-MANOS-008",
    "name": "Manga 100% Kevlar Dupont para cortes y altas temperaturas",
    "originalName": "MANGA 100% KEVLAR - DUPONT CORTES ALTAS TEMPERATURAS",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Mangas de protección",
    "riskTypes": [
      "termico",
      "corte",
      "electrico",
      "quimico"
    ],
    "brand": "Ansell",
    "price": null,
    "availability": "Disponible",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_1c3dc06f7-1777881775479.png",
    "shortDescription": "Manga de protección con fibras Kevlar Dupont para proteger brazos y antebrazos contra cortes, abrasión y quemaduras leves.",
    "description": "Manga de protección fabricada con fibras de Kevlar, diseñada para brindar protección mecánica contra cortes, abrasión y quemaduras leves en brazos y antebrazos. Es ideal para manipulación de materiales afilados donde se requiere comodidad, flexibilidad y libertad de movimiento.",
    "features": [
      "Tecnología Kevlar de DuPont.",
      "Alta resistencia al corte y a la abrasión.",
      "Protege antebrazo contra lesiones y quemaduras leves.",
      "Ligera, flexible y transpirable.",
      "Disponible con o sin orificio para el pulgar.",
      "Diseño que evita torsión durante el uso.",
      "Disponible en diferentes longitudes según modelo.",
      "Cómoda para trabajos prolongados.",
      "Aplicaciones: Manejo de paneles, Vitrinas y materiales afilados, Manipulación de metales, Corte de plástico, cartón y alfombras"
    ],
    "applications": [
      "Manejo de paneles",
      "Vitrinas y materiales afilados",
      "Manipulación de metales",
      "Corte de plástico, cartón y alfombras",
      "Mecanizado",
      "Plegado de piezas",
      "Manejo de vidrio",
      "Procesos de manufactura"
    ],
    "standard": "N/A.",
    "seoKeywords": [
      "manga Kevlar",
      "manga anticorte",
      "manga protección brazos",
      "manga para vidrio",
      "manga alta temperatura"
    ],
    "cta": "Solicita cotización del Manga 100% Kevlar Dupont para cortes y altas temperaturas y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 10,
    "code": "ESI-CABEZA-001",
    "name": "Barbuquejo cuatro puntos graduable INSAFE",
    "originalName": "BARBUQUEJO CUATRO PUNTOS GRADUABLE INSAFE",
    "category": "Protección para cabeza, vista, audición y respiración",
    "categorySlug": "proteccion-para-cabeza",
    "subcategory": "Accesorios para casco",
    "riskTypes": [
      "electrico",
      "quimico",
      "senalizacion"
    ],
    "brand": "INSAFE",
    "price": null,
    "availability": "Disponible",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_12e845811-1779252722026.png",
    "shortDescription": "Barbuquejo INSAFE de 4 puntos para asegurar el casco durante trabajos en altura o actividades de alto movimiento.",
    "description": "Barbuquejo diseñado para proporcionar una sujeción segura del casco de seguridad, evitando desplazamientos o desprendimientos durante trabajos en altura o actividades de alto movimiento. Ofrece comodidad mediante mentonera ergonómica y sistema de ajuste graduable.",
    "features": [
      "Sistema de sujeción de 4 puntos.",
      "Reata de poliéster de 17 mm de alta resistencia.",
      "Ganchos tipo mosquetón de fácil instalación.",
      "Hebillas de ajuste personalizado.",
      "Mentonera ergonómica.",
      "Costuras reforzadas con hilo de nylon negro.",
      "Ligero y resistente para uso prolongado.",
      "Aplicaciones: Trabajos en altura, Construcción, Mantenimiento industrial, Telecomunicaciones"
    ],
    "applications": [
      "Trabajos en altura",
      "Construcción",
      "Mantenimiento industrial",
      "Telecomunicaciones",
      "Minería",
      "Energía",
      "Rescate",
      "Actividades con necesidad de mantener el casco firmemente asegurado"
    ],
    "standard": "N/A.",
    "seoKeywords": [
      "barbuquejo casco",
      "barbuquejo 4 puntos",
      "barbuquejo INSAFE",
      "sujeción casco seguridad",
      "accesorio para casco"
    ],
    "cta": "Solicita cotización del Barbuquejo cuatro puntos graduable INSAFE y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": true
  },
  {
    "id": 11,
    "code": "ESI-CABEZA-002",
    "name": "Casco Tipo I dieléctrico contra alto voltaje INSAFE",
    "originalName": "CASCO TIPO I DIELÉCTRICO, CONTRA ALTO VOLTAJE (30.000 VOLTIOS)",
    "category": "Protección para cabeza, vista, audición y respiración",
    "categorySlug": "proteccion-para-cabeza",
    "subcategory": "Cascos y accesorios",
    "riskTypes": [
      "electrico",
      "quimico",
      "senalizacion"
    ],
    "brand": "INSAFE",
    "price": null,
    "availability": "Disponible",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_12e845811-1779252722026.png",
    "shortDescription": "Casco dieléctrico INSAFE Tipo I fabricado en HDPE, con suspensión de 6 puntos y ajuste ratchet para protección contra impactos y riesgos eléctricos.",
    "description": "Casco de seguridad dieléctrico INSAFE diseñado para proteger la cabeza contra impactos, penetración de objetos y riesgos eléctricos. Está fabricado en polietileno de alta densidad, incorpora suspensión de 6 puntos y ajuste tipo ratchet para brindar comodidad y seguridad en entornos industriales.",
    "features": [
      "Polietileno de alta densidad (HDPE).",
      "Suspensión de 6 puntos con ajuste tipo ratchet.",
      "Banda antisudor para mayor comodidad.",
      "Ranuras laterales para accesorios como orejeras o visor.",
      "Diseño ligero y ergonómico.",
      "Disponible en varios colores.",
      "Protección contra impactos, penetración y riesgo eléctrico Clase E hasta 20,000 V según ficha.",
      "Normativa: ANSI/ISEA Z89.1-2014 Tipo I Clase E y G.",
      "Aplicaciones: Trabajos eléctricos, Construcción, Industria, Minería"
    ],
    "applications": [
      "Trabajos eléctricos",
      "Construcción",
      "Industria",
      "Minería",
      "Mantenimiento",
      "Telecomunicaciones",
      "Energía",
      "Manufactura"
    ],
    "standard": "ANSI/ISEA Z89.1-2014 Tipo I Clase E y G.",
    "seoKeywords": [
      "casco dieléctrico",
      "casco seguridad INSAFE",
      "casco tipo I",
      "casco alto voltaje",
      "casco clase E"
    ],
    "cta": "Solicita cotización del Casco Tipo I dieléctrico contra alto voltaje INSAFE y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 12,
    "code": "ESI-CABEZA-003",
    "name": "Anteojo oscuro JOPZ modelo CUBE con cordón",
    "originalName": "ANTEOJO OSCURO JOPZ MODELO CUBE CON CORDÓN (AN-52A / AN-53A / AN-54A / AN-55A)",
    "category": "Protección para cabeza, vista, audición y respiración",
    "categorySlug": "proteccion-para-cabeza",
    "subcategory": "Protección visual",
    "riskTypes": [
      "electrico",
      "quimico",
      "senalizacion"
    ],
    "brand": "JOPZ",
    "price": null,
    "availability": "Disponible",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_14e3e32a3-1764676652509.png",
    "shortDescription": "Anteojo de seguridad JOPZ modelo CUBE con cordón, lentes de policarbonato, antifog y protección UV para trabajos con riesgo de impacto.",
    "description": "Anteojo de seguridad modelo CUBE con cordón, diseñado para brindar protección visual en trabajos con riesgo de impacto en los ojos. Su diseño flexible, ligero y ergonómico permite un uso prolongado con mayor comodidad para el usuario.",
    "features": [
      "Tratamiento antifog antiempañante.",
      "Lentes con recubrimiento resistente a rayaduras.",
      "Descanso nasal suave.",
      "Protección 99.9% contra rayos UV y UVA.",
      "Alta resistencia al impacto.",
      "Lente de policarbonato.",
      "Marco templado de nylon.",
      "Resistente a impacto, salpicaduras, viento y polvo.",
      "Disponible en versiones claras y oscuras.",
      "Normativa: ANSI Z87.1+.",
      "Aplicaciones: Manufactura industrial, Transporte, Aviación, Sector automotriz"
    ],
    "applications": [
      "Manufactura industrial",
      "Transporte",
      "Aviación",
      "Sector automotriz",
      "Energía",
      "Gas y petróleo",
      "Construcción",
      "Carpintería",
      "Albañilería",
      "Sandblasting",
      "Industria general"
    ],
    "standard": "ANSI Z87.1+.",
    "seoKeywords": [
      "anteojo seguridad JOPZ",
      "lente seguridad oscuro",
      "anteojo antifog",
      "lente policarbonato",
      "gafas seguridad industrial"
    ],
    "cta": "Solicita cotización del Anteojo oscuro JOPZ modelo CUBE con cordón y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 13,
    "code": "ESI-CABEZA-004",
    "name": "Tapón desechable 3M 1110 con cordón",
    "originalName": "TAPÓN DESECHABLE 3M-1110 CON CORDÓN UNIDAD",
    "category": "Protección para cabeza, vista, audición y respiración",
    "categorySlug": "proteccion-para-cabeza",
    "subcategory": "Protección auditiva",
    "riskTypes": [
      "electrico",
      "quimico",
      "senalizacion"
    ],
    "brand": "3M",
    "price": null,
    "availability": "Disponible",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_191a55fc9-1779252720364.png",
    "shortDescription": "Tapón auditivo desechable 3M 1110 con cordón, fabricado en espuma de poliuretano hipoalergénica con atenuación NRR 29 dB.",
    "description": "Tapones auditivos desechables 3M 1100 y 1110, este último con cordón, fabricados en espuma de poliuretano hipoalergénica. Están diseñados para brindar protección auditiva eficaz e higiénica en ambientes donde los niveles de ruido superan los 85 dB(A). Su diseño cónico permite ajuste cómodo para la mayoría de canales auditivos.",
    "features": [
      "Espuma de poliuretano suave e hipoalergénica.",
      "Desechables y cómodos.",
      "Diseño cónico adaptable al canal auditivo.",
      "Color naranja de alta visibilidad.",
      "Modelo 1110 con cordón de poliéster.",
      "Compatible con sistema 3M E-A-Rfit Dual Ear Validation System.",
      "Atenuación NRR 29 dB según ANSI S3.19.",
      "Normativa: ANSI S3.19-1974, EN 352-2, NCh 1331/5, IRAM 4126-2:2000.",
      "Aplicaciones: Ambientes industriales con ruido, Construcción, Manufactura, Mantenimiento"
    ],
    "applications": [
      "Ambientes industriales con ruido",
      "Construcción",
      "Manufactura",
      "Mantenimiento",
      "Operaciones con maquinaria",
      "Áreas donde el ruido supere 85 dB(A)"
    ],
    "standard": "ANSI S3.19-1974, EN 352-2, NCh 1331/5, IRAM 4126-2:2000.",
    "seoKeywords": [
      "tapón auditivo 3M 1110",
      "tapones desechables con cordón",
      "protección auditiva 3M",
      "tapón espuma poliuretano",
      "NRR 29 dB"
    ],
    "cta": "Solicita cotización del Tapón desechable 3M 1110 con cordón y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 14,
    "code": "ESI-CABEZA-005",
    "name": "Respirador media cara 3M 6200 sin filtros",
    "originalName": "RESPIRADOR 1/2 CARA 3M-6200 (SIN FILTROS)",
    "category": "Protección para cabeza, vista, audición y respiración",
    "categorySlug": "proteccion-para-cabeza",
    "subcategory": "Protección respiratoria",
    "riskTypes": [
      "quimico",
      "electrico",
      "senalizacion"
    ],
    "brand": "3M",
    "price": null,
    "availability": "Disponible",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_18df7419a-1779252722563.png",
    "shortDescription": "Media máscara reutilizable 3M 6200 para protección respiratoria contra partículas, gases o vapores al utilizar filtros compatibles.",
    "description": "La media máscara reutilizable 3M Serie 6000 es un respirador elastomérico diseñado para brindar protección respiratoria contra partículas, gases y vapores cuando se utiliza con filtros compatibles de la serie 3M. Su diseño ligero y ergonómico proporciona comodidad durante jornadas prolongadas de trabajo.",
    "features": [
      "Material elastomérico suave y ligero.",
      "Disponible en tallas 6100 pequeña, 6200 mediana y 6300 grande.",
      "Peso aproximado de 82 g.",
      "Diseño reutilizable y de fácil mantenimiento.",
      "Compatible con filtros para partículas, gases y vapores de las series 2000, 5000 y 6000 de 3M.",
      "Arnés ajustable para comodidad y sellado facial.",
      "Vida útil de almacenamiento hasta 5 años bajo condiciones adecuadas.",
      "Normativa: EN 140.",
      "Aplicaciones: Protección respiratoria industrial, Ambientes con partículas, Ambientes con gases o vapores, Pintura"
    ],
    "applications": [
      "Protección respiratoria industrial",
      "Ambientes con partículas",
      "Ambientes con gases o vapores",
      "Pintura",
      "Mantenimiento",
      "Procesos con contaminantes según filtro seleccionado"
    ],
    "standard": "EN 140.",
    "seoKeywords": [
      "respirador 3M 6200",
      "media cara 3M",
      "mascarilla reutilizable 3M",
      "respirador sin filtros",
      "protección respiratoria industrial"
    ],
    "cta": "Solicita cotización del Respirador media cara 3M 6200 sin filtros y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 15,
    "code": "ESI-CABEZA-006",
    "name": "Filtro 3M para gases y vapores 6003",
    "originalName": "FILTRO 3M PARA GASES Y VAPORES 3M-6003",
    "category": "Protección para cabeza, vista, audición y respiración",
    "categorySlug": "proteccion-para-cabeza",
    "subcategory": "Protección respiratoria",
    "riskTypes": [
      "quimico",
      "electrico",
      "senalizacion"
    ],
    "brand": "3M",
    "price": null,
    "availability": "Disponible",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_18df7419a-1779252722563.png",
    "shortDescription": "Cartucho químico 3M 6003 para respiradores 3M, diseñado para ciertos vapores orgánicos y gases ácidos.",
    "description": "El cartucho 3M 6003 es un filtro químico para protección respiratoria diseñado para utilizarse con respiradores elastoméricos 3M de las series 6000, 7000 y FF-400. Proporciona protección contra ciertos vapores orgánicos y gases ácidos como cloro, cloruro de hidrógeno, dióxido de azufre, fluoruro de hidrógeno y sulfuro de hidrógeno. Su diseño trapezoidal mejora la distribución del peso y comodidad durante el uso.",
    "features": [
      "Elemento filtrante de carbón activado tratado.",
      "Diseño trapezoidal para mejor distribución del peso.",
      "Distribución uniforme del aire a través del carbón activado.",
      "Compatible con respiradores 3M series 6000, 7000 y FF-400 con conexión bayoneta.",
      "Color gris con etiqueta amarilla.",
      "Peso aproximado de 106 g.",
      "Protección contra vapores orgánicos y gases ácidos.",
      "Vida útil de almacenamiento hasta 5 años antes de uso.",
      "Normativa: NIOSH 42 CFR 84.",
      "Aplicaciones: Pintura, Industria petroquímica, Minería, Industria química"
    ],
    "applications": [
      "Pintura",
      "Industria petroquímica",
      "Minería",
      "Industria química",
      "Actividades con presencia de vapores orgánicos",
      "Actividades con gases ácidos"
    ],
    "standard": "NIOSH 42 CFR 84.",
    "seoKeywords": [
      "filtro 3M 6003",
      "cartucho gases y vapores",
      "filtro vapores orgánicos",
      "filtro gases ácidos",
      "cartucho respirador 3M"
    ],
    "cta": "Solicita cotización del Filtro 3M para gases y vapores 6003 y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 16,
    "code": "ESI-CABEZA-007",
    "name": "Cubre cuello con cinta reflectiva",
    "originalName": "CUBRE CUELLO CON CINTA REFLECTIVA",
    "category": "Protección para cabeza, vista, audición y respiración",
    "categorySlug": "proteccion-para-cabeza",
    "subcategory": "Accesorios para casco",
    "riskTypes": [
      "electrico",
      "quimico",
      "senalizacion"
    ],
    "brand": "No especificada",
    "price": null,
    "availability": "Disponible",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_12e845811-1779252722026.png",
    "shortDescription": "Cubre cuello reflectivo para casco, diseñado para proteger cuello y nuca contra exposición solar y mejorar la visibilidad del trabajador.",
    "description": "Cubre cuello con cinta reflectiva diseñado para proteger el cuello del trabajador contra la exposición solar y rayos UV. Se instala fácilmente en el casco y ayuda a reducir el estrés térmico al proporcionar sombra y ventilación durante la jornada laboral.",
    "features": [
      "Material tipo malla de alta visibilidad.",
      "Color fluorescente para visibilidad diurna.",
      "Cinta reflectiva para condiciones de poca luz.",
      "Diseño ligero y transpirable.",
      "Fácil instalación en casco de seguridad.",
      "Ayuda a proteger cuello y nuca contra rayos UV.",
      "Contribuye a reducir sensación de calor en exteriores.",
      "Aplicaciones: Construcción, Mantenimiento vial, Minería, Logística"
    ],
    "applications": [
      "Construcción",
      "Mantenimiento vial",
      "Minería",
      "Logística",
      "Agricultura",
      "Trabajos al aire libre",
      "Actividades con exposición prolongada al sol"
    ],
    "standard": "N/A.",
    "seoKeywords": [
      "cubre cuello para casco",
      "cubre nuca reflectivo",
      "protección solar para casco",
      "accesorio casco seguridad",
      "cubre cuello alta visibilidad"
    ],
    "cta": "Solicita cotización del Cubre cuello con cinta reflectiva y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 17,
    "code": "ESI-ELECTRICA-001",
    "name": "Candado LOTO de aluminio detectable 40 mm ABUS 72/40HB40",
    "originalName": "CANDADO LOTO DE ALUMINIO DETECTABLE 40MM ABUS 72/40HB40",
    "category": "Protección eléctrica y bloqueo LOTO",
    "categorySlug": "proteccion-electrica",
    "subcategory": "Candados LOTO",
    "riskTypes": [
      "electrico",
      "senalizacion"
    ],
    "brand": "ABUS",
    "price": null,
    "availability": "Disponible",
    "image": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4",
    "shortDescription": "Candado de seguridad ABUS tipo Lockout/Tagout de 40 mm, con cuerpo de aluminio resistente y colores para identificación visual.",
    "description": "Candado de seguridad tipo Lockout/Tagout ABUS 72/40HB40 diseñado para aplicaciones industriales y procedimientos de bloqueo de energía. Está fabricado con cuerpo de aluminio TITALIUM de alta resistencia al calor y a la corrosión, ideal para identificación visual mediante colores y bloqueo seguro de equipos e interruptores.",
    "features": [
      "Cuerpo de aluminio anodizado anticorrosivo.",
      "Arco de acero endurecido con recubrimiento NANO PROTECT.",
      "Cilindro de precisión de 6 pitones.",
      "Sistema de doble enganche.",
      "Función de autocierre mediante presión del arco.",
      "Incluye 2 llaves.",
      "Disponible con llaves diferentes, iguales o sistemas amaestrados.",
      "Disponible en varios colores para identificación por usuario o área.",
      "Aplicaciones: Procedimientos LOTO, Bloqueo de energía, Mantenimiento industrial, Tableros eléctricos"
    ],
    "applications": [
      "Procedimientos LOTO",
      "Bloqueo de energía",
      "Mantenimiento industrial",
      "Tableros eléctricos",
      "Interruptores",
      "Equipos con riesgo de arranque accidental"
    ],
    "standard": "N/A.",
    "seoKeywords": [
      "candado LOTO",
      "candado ABUS 72/40HB40",
      "candado bloqueo eléctrico",
      "lockout tagout",
      "candado de seguridad industrial"
    ],
    "cta": "Solicita cotización del Candado LOTO de aluminio detectable 40 mm ABUS 72/40HB40 y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 18,
    "code": "ESI-ELECTRICA-002",
    "name": "Etiqueta pequeña de bloqueo LOTO ABUS paquete 100 unidades",
    "originalName": "ETIQUETA PEQUEÑA DE BLOQUEO PAQ 100UNDS ABUS",
    "category": "Protección eléctrica y bloqueo LOTO",
    "categorySlug": "proteccion-electrica",
    "subcategory": "Etiquetas de bloqueo",
    "riskTypes": [
      "electrico",
      "senalizacion"
    ],
    "brand": "ABUS",
    "price": null,
    "availability": "Disponible",
    "image": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4",
    "shortDescription": "Etiqueta LOTO ABUS en polipropileno resistente, ideal para identificar equipos bloqueados durante labores de mantenimiento.",
    "description": "Etiqueta de bloqueo LOTO fabricada en polipropileno de alta resistencia, diseñada para identificar equipos bloqueados durante labores de mantenimiento. Permite registrar advertencias, instrucciones, nombres de trabajadores o departamentos para mejorar la seguridad operativa. Incluye caja dispensadora reutilizable para almacenamiento y acceso rápido.",
    "features": [
      "Papel sintético de polipropileno altamente resistente.",
      "Resistente a la rotura.",
      "Superficie apta para escritura.",
      "Campos de rotulación en la parte posterior.",
      "Disponible en cinco idiomas.",
      "Caja dispensadora recerrable con orificio de 9 mm para colgado.",
      "Ideal para candados y dispositivos de bloqueo en armarios de control.",
      "Dimensiones: 140 mm x 32 mm.",
      "Normativa: ASR A1.3, DIN EN ISO 7010.",
      "Aplicaciones: Bloqueo y etiquetado LOTO, Mantenimiento industrial, Tableros eléctricos, Armarios de control"
    ],
    "applications": [
      "Bloqueo y etiquetado LOTO",
      "Mantenimiento industrial",
      "Tableros eléctricos",
      "Armarios de control",
      "Identificación de equipos bloqueados"
    ],
    "standard": "ASR A1.3, DIN EN ISO 7010.",
    "seoKeywords": [
      "etiqueta LOTO",
      "etiqueta bloqueo ABUS",
      "tagout industrial",
      "etiquetas de seguridad",
      "etiqueta para candado LOTO"
    ],
    "cta": "Solicita cotización del Etiqueta pequeña de bloqueo LOTO ABUS paquete 100 unidades y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 19,
    "code": "ESI-ALTURA-001",
    "name": "Arnés 4 argollas con soporte lumbar INSAFE",
    "originalName": "ARNÉS 4 ARGOLLAS CON SOPORTE LUMBAR",
    "category": "Protección para altura",
    "categorySlug": "proteccion-para-altura",
    "subcategory": "Arneses",
    "riskTypes": [
      "altura"
    ],
    "brand": "INSAFE",
    "price": null,
    "availability": "Bajo pedido",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_1c424ba22-1766150689334.png",
    "shortDescription": "Arnés de cuerpo completo INSAFE con 4 argollas y soporte lumbar ergonómico para trabajos prolongados en altura.",
    "description": "Arnés de cuerpo completo INSAFE diseñado para sistemas personales de detención de caídas, posicionamiento, restricción y ascenso/descenso controlado. Fabricado en reata de poliéster de alta tenacidad con soporte lumbar ergonómico para brindar mayor comodidad durante trabajos prolongados en altura.",
    "features": [
      "4 argollas: 1 dorsal, 1 frontal y 2 laterales tipo D.",
      "Soporte lumbar ergonómico.",
      "Reata de poliéster de alta tenacidad con tratamiento ignífugo.",
      "Diseño en X para mejor distribución de carga.",
      "Argollas de acero de alta resistencia.",
      "Costuras de inspección en hilo blanco y naranja.",
      "Talla universal.",
      "Capacidad de usuario: 130 a 310 lb incluyendo herramientas y equipo.",
      "Normativa: ANSI Z359.1, ANSI Z359.12, CSA Z259.12, ANSI/ASSP Z359.11-2021.",
      "Aplicaciones: Trabajos en altura, Construcción, Mantenimiento industrial, Telecomunicaciones"
    ],
    "applications": [
      "Trabajos en altura",
      "Construcción",
      "Mantenimiento industrial",
      "Telecomunicaciones",
      "Energía",
      "Ascenso y descenso controlado",
      "Posicionamiento",
      "Detención de caídas"
    ],
    "standard": "ANSI Z359.1, ANSI Z359.12, CSA Z259.12, ANSI/ASSP Z359.11-2021.",
    "seoKeywords": [
      "arnés 4 argollas",
      "arnés con soporte lumbar",
      "arnés INSAFE",
      "arnés trabajos en altura",
      "arnés anticaídas"
    ],
    "cta": "Solicita cotización del Arnés 4 argollas con soporte lumbar INSAFE y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": true
  },
  {
    "id": 20,
    "code": "ESI-ALTURA-002",
    "name": "Arnés 4 argollas en X INSAFE",
    "originalName": "ARNÉS 4 ARGOLLAS EN X",
    "category": "Protección para altura",
    "categorySlug": "proteccion-para-altura",
    "subcategory": "Arneses",
    "riskTypes": [
      "altura"
    ],
    "brand": "INSAFE",
    "price": null,
    "availability": "Bajo pedido",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_1c424ba22-1766150689334.png",
    "shortDescription": "Arnés de cuerpo completo INSAFE en diseño X con 4 argollas, fabricado en reata de poliéster de alta tenacidad para trabajos en altura.",
    "description": "Arnés de cuerpo completo INSAFE diseñado para sistemas personales de detención de caídas, posicionamiento, restricción y ascenso/descenso controlado. Su diseño ergonómico en X ofrece seguridad, resistencia y comodidad para labores en altura.",
    "features": [
      "4 argollas: 1 dorsal, 1 frontal y 2 laterales tipo D.",
      "Reata de poliéster de alta tenacidad con tratamiento retardante al fuego.",
      "Diseño ergonómico en X.",
      "Argollas de acero con resistencia de 5,000 lbf.",
      "Hebillas de acero con resistencia de 4,000 lbf.",
      "Costuras de inspección en hilo blanco y naranja.",
      "Talla universal.",
      "Capacidad del usuario: 130 a 310 lb incluyendo herramientas y equipo.",
      "Normativa: ANSI Z359.1, ANSI Z359.11-2021, ANSI Z259.12, CSA Z259.10.",
      "Aplicaciones: Trabajos en altura, Construcción, Mantenimiento industrial, Telecomunicaciones"
    ],
    "applications": [
      "Trabajos en altura",
      "Construcción",
      "Mantenimiento industrial",
      "Telecomunicaciones",
      "Energía",
      "Montaje de estructuras",
      "Trabajos en torres",
      "Inspección",
      "Ascenso y descenso controlado"
    ],
    "standard": "ANSI Z359.1, ANSI Z359.11-2021, ANSI Z259.12, CSA Z259.10.",
    "seoKeywords": [
      "arnés en X",
      "arnés 4 argollas INSAFE",
      "arnés cuerpo completo",
      "arnés anticaídas",
      "equipo protección altura"
    ],
    "cta": "Solicita cotización del Arnés 4 argollas en X INSAFE y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 21,
    "code": "ESI-ALTURA-003",
    "name": "Arnés 4 argollas dieléctrico con soporte lumbar INSAFE",
    "originalName": "ARNÉS 4 ARGOLLAS DIELÉCTRICO CON SOPORTE LUMBAR",
    "category": "Protección para altura",
    "categorySlug": "proteccion-para-altura",
    "subcategory": "Arneses",
    "riskTypes": [
      "electrico",
      "altura"
    ],
    "brand": "INSAFE",
    "price": null,
    "availability": "Bajo pedido",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_1c424ba22-1766150689334.png",
    "shortDescription": "Arnés dieléctrico INSAFE con 4 argollas y soporte lumbar, ideal para trabajos en altura con riesgo eléctrico.",
    "description": "Arnés diseñado para sistemas personales de detención de caídas, posicionamiento, restricción y ascenso/descenso controlado. Está fabricado en reata de poliéster de alta tenacidad con 4 argollas dieléctricas y soporte lumbar ergonómico, ideal para trabajos en altura con riesgo eléctrico.",
    "features": [
      "4 argollas dieléctricas: 1 dorsal, 1 frontal y 2 laterales tipo D.",
      "Soporte lumbar ergonómico.",
      "Reata de poliéster de alta tenacidad con tratamiento retardante al fuego.",
      "Diseño en X para mejor distribución de carga.",
      "Argollas dieléctricas con resistencia de 5,000 lbf.",
      "Hebillas dieléctricas de alta resistencia.",
      "Costuras de inspección en hilo blanco y naranja.",
      "Talla universal.",
      "Capacidad del usuario: 130 a 310 lb incluyendo herramientas y equipo.",
      "Normativa: ANSI Z359.1, ANSI Z359.11-2021, ANSI Z359.12, CSA Z259.10.",
      "Aplicaciones: Trabajos eléctricos, Mantenimiento de redes energizadas, Construcción, Telecomunicaciones"
    ],
    "applications": [
      "Trabajos eléctricos",
      "Mantenimiento de redes energizadas",
      "Construcción",
      "Telecomunicaciones",
      "Industria",
      "Montaje de estructuras",
      "Mantenimiento en altura",
      "Labores con necesidad de aislamiento de componentes metálicos"
    ],
    "standard": "ANSI Z359.1, ANSI Z359.11-2021, ANSI Z359.12, CSA Z259.10.",
    "seoKeywords": [
      "arnés dieléctrico",
      "arnés 4 argollas dieléctrico",
      "arnés trabajos eléctricos",
      "arnés con soporte lumbar",
      "arnés INSAFE dieléctrico"
    ],
    "cta": "Solicita cotización del Arnés 4 argollas dieléctrico con soporte lumbar INSAFE y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 22,
    "code": "ESI-ALTURA-004",
    "name": "Eslinga de posicionamiento en reata regulable INSAFE",
    "originalName": "ESLINGA DE POSICIONAMIENTO EN REATA REGULABLE",
    "category": "Protección para altura",
    "categorySlug": "proteccion-para-altura",
    "subcategory": "Eslingas",
    "riskTypes": [
      "altura"
    ],
    "brand": "INSAFE",
    "price": null,
    "availability": "Bajo pedido",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_13037b4bd-1779252721831.png",
    "shortDescription": "Eslinga de posicionamiento regulable en reata de poliéster, con ganchos de acero para mantener al trabajador en posición segura.",
    "description": "Eslinga fabricada en reata de poliéster de alta tenacidad con longitud regulable. Está diseñada para labores de posicionamiento y restricción de desplazamiento en trabajos en altura, proporcionando seguridad, estabilidad y facilidad de ajuste.",
    "features": [
      "Reata de poliéster de alta tenacidad con tratamiento retardante al fuego.",
      "Longitud regulable mediante hebilla de ajuste.",
      "Dos ganchos de acero de alta resistencia.",
      "Resistencia de la reata: 5,000 lbf.",
      "Ganchos de acero con resistencia de 5,000 lbf.",
      "Costuras reforzadas con hilo blanco para inspección.",
      "Longitud máxima: 1.90 m.",
      "Capacidad del usuario: 130 a 310 lb incluyendo herramientas y equipo.",
      "Normativa: ANSI Z359.1, ANSI Z359.12, CSA Z259.12, ANSI/ASSP Z359.3-2019, ANSI/ASSP A10.32-2012.",
      "Aplicaciones: Posicionamiento en altura, Mantenimiento industrial, Construcción, Telecomunicaciones"
    ],
    "applications": [
      "Posicionamiento en altura",
      "Mantenimiento industrial",
      "Construcción",
      "Telecomunicaciones",
      "Energía",
      "Montaje de estructuras",
      "Poda",
      "Inspección"
    ],
    "standard": "ANSI Z359.1, ANSI Z359.12, CSA Z259.12, ANSI/ASSP Z359.3-2019, ANSI/ASSP A10.32-2012.",
    "seoKeywords": [
      "eslinga de posicionamiento",
      "eslinga regulable",
      "eslinga reata",
      "eslinga INSAFE",
      "posicionamiento trabajos en altura"
    ],
    "cta": "Solicita cotización del Eslinga de posicionamiento en reata regulable INSAFE y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 23,
    "code": "ESI-ALTURA-005",
    "name": "Anclaje regulable de una argolla 1.8 m INSAFE",
    "originalName": "ANCLAJE REGULABLE DE UNA ARGOLLA 1.8M",
    "category": "Protección para altura",
    "categorySlug": "proteccion-para-altura",
    "subcategory": "Anclajes",
    "riskTypes": [
      "altura"
    ],
    "brand": "INSAFE",
    "price": null,
    "availability": "Bajo pedido",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_13037b4bd-1779252721831.png",
    "shortDescription": "Anclaje regulable de 1.8 m en reata de poliéster con argolla de acero, diseñado para puntos de anclaje portátiles en trabajos en altura.",
    "description": "Anclaje fabricado en reata de poliéster de alta tenacidad con tratamiento ignífugo y una argolla en acero. Permite ajustar la longitud mediante hebilla para adaptarse a diferentes puntos de anclaje y brindar seguridad y resistencia en trabajos en alturas.",
    "features": [
      "Reata de poliéster de alta tenacidad con tratamiento ignífugo.",
      "Argolla en acero de alta resistencia.",
      "Hebilla metálica para ajuste de longitud.",
      "Longitud graduable hasta 1.8 m.",
      "Costuras de alta visibilidad para inspección.",
      "Etiqueta de identificación del producto.",
      "Capacidad de usuario: 130 a 310 lb incluyendo herramientas y equipo.",
      "Normativa: ANSI Z359.1, ANSI Z359.12, CSA Z259.12, ANSI/ASSP Z359.18-2017.",
      "Aplicaciones: Trabajos en alturas, Sistemas de posicionamiento, Restricción de caídas, Mantenimiento industrial"
    ],
    "applications": [
      "Trabajos en alturas",
      "Sistemas de posicionamiento",
      "Restricción de caídas",
      "Mantenimiento industrial",
      "Construcción",
      "Energía",
      "Telecomunicaciones",
      "Instalación y mantenimiento de estructuras"
    ],
    "standard": "ANSI Z359.1, ANSI Z359.12, CSA Z259.12, ANSI/ASSP Z359.18-2017.",
    "seoKeywords": [
      "anclaje regulable",
      "anclaje 1.8 m",
      "anclaje una argolla",
      "punto de anclaje portátil",
      "anclaje INSAFE"
    ],
    "cta": "Solicita cotización del Anclaje regulable de una argolla 1.8 m INSAFE y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 24,
    "code": "ESI-ALTURA-006",
    "name": "Anclaje dieléctrico regulable de una argolla 1.8 m INSAFE",
    "originalName": "ANCLAJE DIELÉCTRICO REGULABLE DE UNA ARGOLLA 1,8M",
    "category": "Protección para altura",
    "categorySlug": "proteccion-para-altura",
    "subcategory": "Anclajes",
    "riskTypes": [
      "electrico",
      "altura"
    ],
    "brand": "INSAFE",
    "price": null,
    "availability": "Bajo pedido",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_13037b4bd-1779252721831.png",
    "shortDescription": "Anclaje dieléctrico regulable de 1.8 m para trabajos en altura con necesidad de aislamiento eléctrico.",
    "description": "Elemento de protección contra caídas fabricado en reata dieléctrica de poliéster, diseñado para ser utilizado como punto de anclaje portátil. Su longitud es ajustable mediante hebilla reguladora y está destinado a trabajos en estructuras, mantenimiento eléctrico, postes, torres y otras aplicaciones donde se requiere aislamiento eléctrico y protección contra caídas.",
    "features": [
      "Reata de poliéster de alta tenacidad con tratamiento ignífugo.",
      "Argolla en D dieléctrica.",
      "Hebilla de regulación.",
      "Herrajes de conexión con capacidad de carga dieléctrica.",
      "Costuras en hilo blanco para facilitar inspección.",
      "Pasador elástico.",
      "Etiqueta de identificación.",
      "Longitud máxima: 1.80 m ajustable.",
      "Resistencia mínima: 5,000 lb.",
      "Normativa: ANSI Z359.1, ANSI Z359.12, CSA Z259.12, ANSI/ASSP Z359.18-2017.",
      "Aplicaciones: Líneas de vida, Mantenimiento eléctrico, Redes de distribución eléctrica, Torres de telecomunicaciones"
    ],
    "applications": [
      "Líneas de vida",
      "Mantenimiento eléctrico",
      "Redes de distribución eléctrica",
      "Torres de telecomunicaciones",
      "Postes de energía",
      "Construcción",
      "Industria petrolera",
      "Trabajos en altura con aislamiento eléctrico"
    ],
    "standard": "ANSI Z359.1, ANSI Z359.12, CSA Z259.12, ANSI/ASSP Z359.18-2017.",
    "seoKeywords": [
      "anclaje dieléctrico",
      "anclaje regulable dieléctrico",
      "anclaje para electricistas",
      "anclaje INSAFE 1.8 m",
      "protección altura eléctrica"
    ],
    "cta": "Solicita cotización del Anclaje dieléctrico regulable de una argolla 1.8 m INSAFE y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 25,
    "code": "ESI-ALTURA-007",
    "name": "Línea de vida vertical en cuerda trenzada 14 mm - 30 m INSAFE",
    "originalName": "LÍNEA DE VIDA VERTICAL EN CUERDA TRENZADA 14MM - 30 MT",
    "category": "Protección para altura",
    "categorySlug": "proteccion-para-altura",
    "subcategory": "Líneas de vida",
    "riskTypes": [
      "altura"
    ],
    "brand": "INSAFE",
    "price": null,
    "availability": "Bajo pedido",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_13037b4bd-1779252721831.png",
    "shortDescription": "Línea de vida vertical de 30 m en cuerda trenzada semiestática de 14 mm, con dispositivo deslizante de detención de caídas.",
    "description": "Línea de vida vertical fabricada en cuerda trenzada semiestática de 14 mm de diámetro, diseñada para brindar protección contra caídas durante trabajos en altura. Incluye dispositivo deslizante que se desplaza a lo largo de la cuerda y se bloquea automáticamente en caso de caída, permitiendo desplazamiento seguro del usuario.",
    "features": [
      "Cuerda trenzada semiestática de 14 mm.",
      "Dispositivo deslizante de detención de caídas.",
      "Gancho de acero de alta resistencia.",
      "Guardacabos de protección.",
      "Etiqueta de identificación del producto.",
      "Terminales con protección termoencogible.",
      "Resistencia mínima de cuerda: 5,000 lbf.",
      "Resistencia mínima del gancho: 5,000 lbf.",
      "Normativa: ANSI Z359.1, ANSI Z359.12, CSA Z259.12, ANSI/ASSE Z359.15-2014.",
      "Aplicaciones: Torres de telecomunicaciones, Ascenso y descenso por escaleras fijas, Mantenimiento industrial, Postes y estructuras eléctricas"
    ],
    "applications": [
      "Torres de telecomunicaciones",
      "Ascenso y descenso por escaleras fijas",
      "Mantenimiento industrial",
      "Postes y estructuras eléctricas",
      "Construcción",
      "Industria petrolera y minera",
      "Fachadas",
      "Silos y tanques"
    ],
    "standard": "ANSI Z359.1, ANSI Z359.12, CSA Z259.12, ANSI/ASSE Z359.15-2014.",
    "seoKeywords": [
      "línea de vida vertical",
      "cuerda 14 mm 30 m",
      "línea vida INSAFE",
      "sistema anticaídas vertical",
      "cuerda con arrestador"
    ],
    "cta": "Solicita cotización del Línea de vida vertical en cuerda trenzada 14 mm - 30 m INSAFE y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 26,
    "code": "ESI-ALTURA-008",
    "name": "Eslinga sencilla con absorbedor y ganchos mixtos INSAFE",
    "originalName": "ESLINGA SENCILLA CON ABSORBEDOR Y GANCHOS MIXTOS",
    "category": "Protección para altura",
    "categorySlug": "proteccion-para-altura",
    "subcategory": "Eslingas",
    "riskTypes": [
      "altura"
    ],
    "brand": "INSAFE",
    "price": null,
    "availability": "Bajo pedido",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_13037b4bd-1779252721831.png",
    "shortDescription": "Eslinga sencilla con absorbedor de energía y ganchos mixtos, diseñada para sistemas personales de detención de caídas.",
    "description": "Elemento de detención de caídas diseñado para formar parte de un sistema personal de protección contra caídas. Incorpora absorbedor de energía que limita la fuerza de impacto durante una caída y está equipado con gancho de 2 1/4 pulgadas y gancho de 3/4 pulgadas para conexión segura a distintos puntos de anclaje.",
    "features": [
      "Reata de poliéster de alta tenacidad con tratamiento ignífugo.",
      "Absorbedor de energía integrado.",
      "Gancho de 2 1/4 pulgadas de apertura.",
      "Gancho de 3/4 pulgadas de apertura.",
      "Argolla en D de acero.",
      "Costuras en hilo blanco para inspección.",
      "Protección termoencogible en uniones.",
      "Longitud: 1.8 m.",
      "Componentes metálicos con resistencia mínima de 5,000 lbf.",
      "Absorbedor limita fuerza de impacto a máximo aproximado de 900 lbf / 4 kN.",
      "Normativa: ANSI Z359.1, ANSI Z359.12, CSA Z259.12, ANSI/ASSE Z359.13-2013.",
      "Aplicaciones: Trabajos en altura con riesgo de caída, Construcción, Mantenimiento industrial, Torres de telecomunicaciones"
    ],
    "applications": [
      "Trabajos en altura con riesgo de caída",
      "Construcción",
      "Mantenimiento industrial",
      "Torres de telecomunicaciones",
      "Postes y redes eléctricas",
      "Industria petrolera y minera",
      "Montaje de estructuras metálicas",
      "Inspección y mantenimiento"
    ],
    "standard": "ANSI Z359.1, ANSI Z359.12, CSA Z259.12, ANSI/ASSE Z359.13-2013.",
    "seoKeywords": [
      "eslinga con absorbedor",
      "eslinga sencilla",
      "eslinga ganchos mixtos",
      "eslinga anticaídas",
      "eslinga INSAFE"
    ],
    "cta": "Solicita cotización del Eslinga sencilla con absorbedor y ganchos mixtos INSAFE y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 27,
    "code": "ESI-ALTURA-009",
    "name": "Eslinga en Y con absorbedor INSAFE",
    "originalName": "ESLINGA EN Y CON ABSORBEDOR",
    "category": "Protección para altura",
    "categorySlug": "proteccion-para-altura",
    "subcategory": "Eslingas",
    "riskTypes": [
      "altura"
    ],
    "brand": "INSAFE",
    "price": null,
    "availability": "Bajo pedido",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_13037b4bd-1779252721831.png",
    "shortDescription": "Eslinga en Y con absorbedor de energía para mantener conexión continua durante desplazamientos entre puntos de anclaje.",
    "description": "Elemento de detención de caídas diseñado para integrarse a un sistema personal de protección contra caídas. Su configuración en Y permite al usuario permanecer conectado al sistema de anclaje mientras realiza desplazamientos entre diferentes puntos de conexión. Incorpora absorbedor de energía que reduce la fuerza de impacto en caso de caída.",
    "features": [
      "Reata de poliéster de alta tenacidad con tratamiento ignífugo.",
      "Configuración en Y con absorbedor integrado.",
      "Dos ganchos de 2 1/4 pulgadas de apertura.",
      "Un gancho de 3/4 pulgadas de apertura.",
      "Argolla en D de acero.",
      "Costuras en hilo blanco para inspección.",
      "Protección termoencogible en uniones.",
      "Longitud: 1.8 m.",
      "Componentes metálicos con resistencia mínima de 5,000 lbf.",
      "Absorbedor limita fuerza de impacto a máximo aproximado de 900 lbf / 4 kN.",
      "Normativa: ANSI Z359.1, ANSI Z359.12, CSA Z259.12, ANSI/ASSE Z359.13-2013.",
      "Aplicaciones: Desplazamiento continuo entre puntos de anclaje, Construcción, Mantenimiento industrial, Torres de telecomunicaciones"
    ],
    "applications": [
      "Desplazamiento continuo entre puntos de anclaje",
      "Construcción",
      "Mantenimiento industrial",
      "Torres de telecomunicaciones",
      "Postes y redes eléctricas",
      "Montaje de estructuras metálicas",
      "Industria petrolera y minera",
      "Inspección y mantenimiento"
    ],
    "standard": "ANSI Z359.1, ANSI Z359.12, CSA Z259.12, ANSI/ASSE Z359.13-2013.",
    "seoKeywords": [
      "eslinga en Y",
      "eslinga doble con absorbedor",
      "eslinga dos ganchos",
      "eslinga anticaídas Y",
      "eslinga INSAFE Y"
    ],
    "cta": "Solicita cotización del Eslinga en Y con absorbedor INSAFE y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 28,
    "code": "ESI-ALTURA-010",
    "name": "Freno arrestador automático para cuerda de 12 a 14 mm YOKE",
    "originalName": "FRENO ARRESTADOR AUTOMÁTICO PARA CUERDA DE 12 A 14 MM",
    "category": "Protección para altura",
    "categorySlug": "proteccion-para-altura",
    "subcategory": "Conectores",
    "riskTypes": [
      "altura"
    ],
    "brand": "YOKE",
    "price": null,
    "availability": "Bajo pedido",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_13037b4bd-1779252721831.png",
    "shortDescription": "Arrestador automático para cuerda de 12 a 14 mm, con bloqueo automático y función antipánico para líneas de vida verticales.",
    "description": "Dispositivo móvil de detención de caídas diseñado para desplazarse sobre una línea de vida vertical de cuerda. Se bloquea automáticamente en caso de caída, deteniendo el descenso del usuario. Su función antipánico evita el deslizamiento cuando el usuario acciona incorrectamente el equipo durante una emergencia.",
    "features": [
      "Fabricado en acero inoxidable pulido.",
      "Compatible con cuerdas de 12.7 mm a 14 mm de diámetro.",
      "Sistema de bloqueo automático sobre la cuerda.",
      "Función Panic que evita descenso accidental por manipulación indebida.",
      "Resistencia mínima a la rotura: 3,600 lb / 16 kN.",
      "Peso aproximado: 0.6 kg.",
      "Diseñado para instalarse y retirarse fácilmente de la cuerda.",
      "Normativa: ANSI Z359.12, CSA Z259.2.5.",
      "Aplicaciones: Sistemas de línea de vida vertical, Ascenso y descenso en escaleras fijas, Torres de telecomunicaciones, Postes de energía"
    ],
    "applications": [
      "Sistemas de línea de vida vertical",
      "Ascenso y descenso en escaleras fijas",
      "Torres de telecomunicaciones",
      "Postes de energía",
      "Estructuras metálicas",
      "Industria petrolera y minera",
      "Trabajos en altura con cuerda vertical"
    ],
    "standard": "ANSI Z359.12, CSA Z259.2.5.",
    "seoKeywords": [
      "freno arrestador",
      "arrestador para cuerda",
      "freno para línea de vida",
      "arrestador YOKE",
      "freno cuerda 12 a 14 mm"
    ],
    "cta": "Solicita cotización del Freno arrestador automático para cuerda de 12 a 14 mm YOKE y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 29,
    "code": "ESI-ALTURA-011",
    "name": "Mosquetón carabinero 3 seguros automático 8.8 oz / 250 g YOKE",
    "originalName": "MOSQUETÓN CARABINERO 3 SEGUROS AUTOMÁTICO 8.8 OZ./250G",
    "category": "Protección para altura",
    "categorySlug": "proteccion-para-altura",
    "subcategory": "Conectores",
    "riskTypes": [
      "altura"
    ],
    "brand": "YOKE",
    "price": null,
    "availability": "Bajo pedido",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_13037b4bd-1779252721831.png",
    "shortDescription": "Conector metálico automático de 3 seguros, fabricado en acero aleado galvanizado para sistemas personales de protección contra caídas.",
    "description": "Conector metálico diseñado para formar parte de sistemas personales de protección contra caídas. Fabricado en acero aleado de alta resistencia con acabado galvanizado, cuenta con sistema de cierre y bloqueo automático que proporciona conexión rápida y segura entre componentes del sistema anticaídas.",
    "features": [
      "Acero aleado de alta resistencia.",
      "Acabado galvanizado para mayor resistencia a la corrosión.",
      "Apertura del gatillo: 19 mm / 0.75 pulgadas.",
      "Sistema de cierre y bloqueo automático.",
      "Carga mínima de rotura: 41 kN / 9,200 lb.",
      "Peso aproximado: 0.252 kg.",
      "Diseño ergonómico para conexión y desconexión.",
      "Normativa: ANSI Z359.1-2007, EN 362:2004 Clase B.",
      "Aplicaciones: Sistemas personales de detención de caídas, Conexión de eslingas, Líneas de vida, Dispositivos anticaídas"
    ],
    "applications": [
      "Sistemas personales de detención de caídas",
      "Conexión de eslingas",
      "Líneas de vida",
      "Dispositivos anticaídas",
      "Construcción",
      "Torres de telecomunicaciones",
      "Mantenimiento industrial",
      "Industria petrolera y minera",
      "Estructuras metálicas y postes eléctricos"
    ],
    "standard": "ANSI Z359.1-2007, EN 362:2004 Clase B.",
    "seoKeywords": [
      "mosquetón 3 seguros",
      "carabinero automático",
      "mosquetón YOKE",
      "conector anticaídas",
      "mosquetón acero galvanizado"
    ],
    "cta": "Solicita cotización del Mosquetón carabinero 3 seguros automático 8.8 oz / 250 g YOKE y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 30,
    "code": "ESI-SENALIZACION-001",
    "name": "Cinta antiderrapante negra 3M adhesiva 2 x 60 pies",
    "originalName": "CINTA ANTIDERRAPANTE NEGRA 3M ADHESIVA 2X60 PIES",
    "category": "Señalización y control de áreas",
    "categorySlug": "senalizacion-industrial",
    "subcategory": "Cintas y demarcación",
    "riskTypes": [
      "senalizacion"
    ],
    "brand": "3M",
    "price": null,
    "availability": "Disponible",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_10638ea13-1779252722532.png",
    "shortDescription": "Cinta antideslizante 3M Safety-Walk negra, adhesiva, diseñada para mejorar la tracción y reducir resbalones en escaleras, rampas y áreas industriales.",
    "description": "Cinta antideslizante 3M Safety-Walk diseñada para reducir el riesgo de resbalones y caídas en superficies de tránsito peatonal e industrial. Está compuesta por partículas abrasivas adheridas a una película resistente con adhesivo sensible a la presión, proporcionando alta tracción en superficies secas, húmedas o con presencia moderada de contaminantes.",
    "features": [
      "Superficie abrasiva de alta resistencia al desgaste.",
      "Adhesivo de alta adherencia sensible a la presión.",
      "Disponible en diferentes series para aplicaciones específicas.",
      "Resistente a la humedad y al tránsito continuo.",
      "Disponible en varios colores y dimensiones.",
      "Aplicable sobre metal, concreto, madera pintada, fibra de vidrio, cerámica y otras superficies.",
      "Coeficiente de fricción elevado.",
      "Adecuada para escaleras, rampas, plataformas, pasarelas, vehículos y áreas industriales.",
      "Normativa: DIN 51130 (ZH1/571), ASTM E648-10e1 / NFPA 253, ASTM E662-09 / NFPA 258, FAA 25.853 / FAA 25.855.",
      "Aplicaciones: Escaleras, Rampas, Pasarelas, Plataformas industriales"
    ],
    "applications": [
      "Escaleras",
      "Rampas",
      "Pasarelas",
      "Plataformas industriales",
      "Montacargas",
      "Almacenes",
      "Áreas húmedas",
      "Muelles de carga",
      "Transporte",
      "Construcción",
      "Zonas de alto tránsito"
    ],
    "standard": "DIN 51130 (ZH1/571), ASTM E648-10e1 / NFPA 253, ASTM E662-09 / NFPA 258, FAA 25.853 / FAA 25.855.",
    "seoKeywords": [
      "cinta antiderrapante 3M",
      "cinta antideslizante negra",
      "Safety-Walk 3M",
      "cinta adhesiva antideslizante",
      "cinta para escaleras"
    ],
    "cta": "Solicita cotización del Cinta antiderrapante negra 3M adhesiva 2 x 60 pies y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": true
  },
  {
    "id": 31,
    "code": "ESI-SENALIZACION-002",
    "name": "Rollo cinta de precaución 3 x 1000 yardas amarillo",
    "originalName": "ROLLO CINTA DE PRECAUCIÓN 3X1000 YARDAS AMARILLO",
    "category": "Señalización y control de áreas",
    "categorySlug": "senalizacion-industrial",
    "subcategory": "Cintas y demarcación",
    "riskTypes": [
      "senalizacion"
    ],
    "brand": "No especificada",
    "price": null,
    "availability": "Disponible",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_10638ea13-1779252722532.png",
    "shortDescription": "Cinta de precaución amarilla de 3 pulgadas x 1000 yardas para señalización temporal y delimitación preventiva de áreas.",
    "description": "Cinta de precaución para señalización temporal, diseñada para delimitar áreas de trabajo, zonas de riesgo moderado, mantenimiento, limpieza y control de acceso. Su color amarillo de alta visibilidad con la leyenda PRECAUCIÓN permite alertar a las personas sobre posibles peligros y mantener una circulación segura.",
    "features": [
      "Fabricada en polietileno resistente.",
      "Color amarillo de alta visibilidad.",
      "Impresión continua con la palabra PRECAUCIÓN en color negro.",
      "Ligera, flexible y fácil de instalar.",
      "Resistente a humedad y condiciones ambientales normales.",
      "Dimensiones: 3 pulgadas x 1000 yardas.",
      "Ideal para señalización preventiva y delimitación temporal de áreas.",
      "Aplicaciones: Mantenimiento industrial, Limpieza, Construcción, Control de tránsito peatonal"
    ],
    "applications": [
      "Mantenimiento industrial",
      "Limpieza",
      "Construcción",
      "Control de tránsito peatonal",
      "Delimitación de áreas de trabajo",
      "Señalización preventiva",
      "Eventos temporales"
    ],
    "standard": "N/A.",
    "seoKeywords": [
      "cinta de precaución",
      "cinta amarilla precaución",
      "cinta delimitación",
      "rollo cinta seguridad",
      "cinta 3x1000 yardas"
    ],
    "cta": "Solicita cotización del Rollo cinta de precaución 3 x 1000 yardas amarillo y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 32,
    "code": "ESI-SENALIZACION-003",
    "name": "Rollo cinta de peligro roja 3 x 1000 yardas",
    "originalName": "ROLLO CINTA DE PELIGRO ROJA 3X1000 YARDAS ROJA",
    "category": "Señalización y control de áreas",
    "categorySlug": "senalizacion-industrial",
    "subcategory": "Cintas y demarcación",
    "riskTypes": [
      "senalizacion"
    ],
    "brand": "No especificada",
    "price": null,
    "availability": "Disponible",
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_10638ea13-1779252722532.png",
    "shortDescription": "Cinta de peligro roja de 3 pulgadas x 1000 yardas para delimitar áreas restringidas, riesgos y accesos no autorizados.",
    "description": "Cinta de peligro para señalización temporal, diseñada para delimitar áreas restringidas, zonas de riesgo, trabajos de construcción, mantenimiento y situaciones de emergencia. Su color rojo de alta visibilidad con la leyenda PELIGRO permite advertir claramente sobre presencia de riesgos y restringir el acceso a personal no autorizado.",
    "features": [
      "Fabricada en polietileno de alta resistencia.",
      "Color rojo fluorescente de alta visibilidad.",
      "Impresión continua con la palabra PELIGRO en color negro.",
      "Ligera, flexible y fácil de instalar.",
      "Resistente a humedad y condiciones ambientales normales.",
      "Dimensiones: 3 pulgadas x 1000 yardas.",
      "Uso temporal para delimitación y señalización de áreas.",
      "Aplicaciones: Obras de construcción, Mantenimiento industrial, Trabajos eléctricos, Control de acceso"
    ],
    "applications": [
      "Obras de construcción",
      "Mantenimiento industrial",
      "Trabajos eléctricos",
      "Control de acceso",
      "Zonas de excavación",
      "Emergencias",
      "Tránsito",
      "Señalización preventiva"
    ],
    "standard": "N/A.",
    "seoKeywords": [
      "cinta de peligro",
      "cinta roja peligro",
      "cinta delimitación roja",
      "cinta seguridad industrial",
      "cinta 3x1000 yardas"
    ],
    "cta": "Solicita cotización del Rollo cinta de peligro roja 3 x 1000 yardas y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  },
  {
    "id": 33,
    "code": "ESI-ERGONOMIA-001",
    "name": "Alfombra ergonómica antifatiga 15/16 pulgadas de 3 x 5 pies Wearwell",
    "originalName": "ALFOMBRA ERGONÓMICA ANTIFATIGA 15/16\" DE 3'X5' WEARWELL",
    "category": "Ergonomía",
    "categorySlug": "ergonomia-industrial",
    "subcategory": "Alfombras antifatiga",
    "riskTypes": [
      "ergonomia"
    ],
    "brand": "WEARWELL",
    "price": null,
    "availability": "Disponible",
    "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
    "shortDescription": "Alfombra antifatiga Wearwell con superficie Diamond-Plate y bordes amarillos, diseñada para reducir la fatiga en puestos donde el personal permanece de pie.",
    "description": "Alfombra antifatiga Wearwell SMART Diamond-Plate Black with Yellow Borders, diseñada para reducir la fatiga de trabajadores que permanecen de pie durante largos períodos. Fabricada con superficie de PVC y base de espuma de uretano reciclado, ofrece comodidad, resistencia y una solución económica y ecológica para áreas de trabajo secas.",
    "features": [
      "Diseño Diamond-Plate negro con bordes amarillos de seguridad.",
      "Superficie de PVC resistente al desgaste.",
      "Base de espuma de uretano reciclado.",
      "Contiene hasta 80% de material reciclado.",
      "Disponible en espesores de 5/8 pulgadas / 16 mm y 1 pulgada / 25 mm.",
      "Reduce la fatiga en trabajos de pie.",
      "Durabilidad hasta 5 veces mayor que alfombras convencionales de espuma.",
      "Disponible en medidas estándar y longitudes personalizadas.",
      "Garantía de 1 año.",
      "Normativa: MVSS 302, ASTM D3884, ASTM F1677, ASTM D575.",
      "Aplicaciones: Áreas de producción, Estaciones de ensamblaje, Líneas de manufactura, Mostradores de atención"
    ],
    "applications": [
      "Áreas de producción",
      "Estaciones de ensamblaje",
      "Líneas de manufactura",
      "Mostradores de atención",
      "Talleres",
      "Almacenes",
      "Puestos de trabajo de pie durante períodos prolongados"
    ],
    "standard": "MVSS 302, ASTM D3884, ASTM F1677, ASTM D575.",
    "seoKeywords": [
      "alfombra antifatiga",
      "alfombra ergonómica Wearwell",
      "tapete antifatiga industrial",
      "alfombra Diamond Plate",
      "alfombra para trabajo de pie"
    ],
    "cta": "Solicita cotización del Alfombra ergonómica antifatiga 15/16 pulgadas de 3 x 5 pies Wearwell y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "featured": false
  }
];

const productGalleryImagesBySubcategory: Record<string, string[]> = {
  "Guantes dieléctricos": [
    "https://img.rocket.new/generatedImages/rocket_gen_img_1c3dc06f7-1777881775479.png",
    "https://img.rocket.new/generatedImages/rocket_gen_img_11ee0d21e-1779252722362.png",
    "https://img.rocket.new/generatedImages/rocket_gen_img_1dbd514a5-1765185557962.png",
    "https://img.rocket.new/generatedImages/rocket_gen_img_1bd90196e-1772126031488.png",
  ],
  "Guantes anticorte": [
    "https://img.rocket.new/generatedImages/rocket_gen_img_1c3dc06f7-1777881775479.png",
    "https://img.rocket.new/generatedImages/rocket_gen_img_11ee0d21e-1779252722362.png",
    "https://img.rocket.new/generatedImages/rocket_gen_img_1bd90196e-1772126031488.png",
    "https://img.rocket.new/generatedImages/rocket_gen_img_1dbd514a5-1765185557962.png",
  ],
  "Guantes químicos": [
    "https://img.rocket.new/generatedImages/rocket_gen_img_1dbd514a5-1765185557962.png",
    "https://img.rocket.new/generatedImages/rocket_gen_img_11ee0d21e-1779252722362.png",
    "https://img.rocket.new/generatedImages/rocket_gen_img_1c3dc06f7-1777881775479.png",
    "https://img.rocket.new/generatedImages/rocket_gen_img_1bd90196e-1772126031488.png",
  ],
  "Guantes térmicos": [
    "https://img.rocket.new/generatedImages/rocket_gen_img_1c3dc06f7-1777881775479.png",
    "https://img.rocket.new/generatedImages/rocket_gen_img_1bd90196e-1772126031488.png",
    "https://img.rocket.new/generatedImages/rocket_gen_img_11ee0d21e-1779252722362.png",
    "https://img.rocket.new/generatedImages/rocket_gen_img_1dbd514a5-1765185557962.png",
  ],
  "Guantes de cuero": [
    "https://img.rocket.new/generatedImages/rocket_gen_img_1dbd514a5-1765185557962.png",
    "https://img.rocket.new/generatedImages/rocket_gen_img_11ee0d21e-1779252722362.png",
    "https://img.rocket.new/generatedImages/rocket_gen_img_1c3dc06f7-1777881775479.png",
    "https://img.rocket.new/generatedImages/rocket_gen_img_1bd90196e-1772126031488.png",
  ],
  "Mangas de protección": [
    "https://img.rocket.new/generatedImages/rocket_gen_img_1c3dc06f7-1777881775479.png",
    "https://img.rocket.new/generatedImages/rocket_gen_img_11ee0d21e-1779252722362.png",
    "https://img.rocket.new/generatedImages/rocket_gen_img_1bd90196e-1772126031488.png",
    "https://img.rocket.new/generatedImages/rocket_gen_img_1dbd514a5-1765185557962.png",
  ],
};

products.forEach((product) => {
  const galleryImages = productGalleryImagesBySubcategory[product.subcategory];
  if (galleryImages) {
    product.images = Array.from(new Set([product.image, ...galleryImages])).slice(0, 4);
  }
});

export const categories: ProductCategory[] = [
  {
    "id": 1,
    "name": "Protección para cuerpo",
    "slug": "proteccion-para-cuerpo",
    "icon": "Shirt",
    "description": "Alta visibilidad, chalecos reflectivos y ropa de seguridad para zonas de riesgo.",
    "count": 1,
    "image": "https://images.unsplash.com/photo-1602886019766-b558d889d0e3",
    "riskTypes": [
      "senalizacion",
      "termico",
      "ergonomia"
    ]
  },
  {
    "id": 2,
    "name": "Protección para manos",
    "slug": "proteccion-para-manos",
    "icon": "Hand",
    "description": "Guantes dieléctricos, anticorte, químicos, térmicos, de cuero y mangas de protección.",
    "count": 8,
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_11ee0d21e-1779252722362.png",
    "riskTypes": [
      "electrico",
      "corte",
      "quimico",
      "termico"
    ]
  },
  {
    "id": 3,
    "name": "Protección para cabeza, vista, audición y respiración",
    "slug": "proteccion-para-cabeza",
    "icon": "HardHat",
    "description": "Cascos, accesorios, protección visual, auditiva, respiratoria y complementos para casco.",
    "count": 7,
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_12e845811-1779252722026.png",
    "riskTypes": [
      "electrico",
      "quimico",
      "senalizacion"
    ]
  },
  {
    "id": 4,
    "name": "Protección eléctrica y bloqueo LOTO",
    "slug": "proteccion-electrica",
    "icon": "LockKeyhole",
    "description": "Candados, etiquetas y accesorios de bloqueo y etiquetado LOTO para control de energía.",
    "count": 2,
    "image": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4",
    "riskTypes": [
      "electrico",
      "senalizacion"
    ]
  },
  {
    "id": 5,
    "name": "Protección para altura",
    "slug": "proteccion-para-altura",
    "icon": "MoveUp",
    "description": "Arneses, eslingas, anclajes, líneas de vida, conectores y sistemas anticaída.",
    "count": 11,
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_13037b4bd-1779252721831.png",
    "riskTypes": [
      "altura"
    ]
  },
  {
    "id": 6,
    "name": "Señalización y control de áreas",
    "slug": "senalizacion-industrial",
    "icon": "TriangleAlert",
    "description": "Cintas, señales y elementos para delimitación, advertencia y control de áreas.",
    "count": 3,
    "image": "https://img.rocket.new/generatedImages/rocket_gen_img_10638ea13-1779252722532.png",
    "riskTypes": [
      "senalizacion"
    ]
  },
  {
    "id": 7,
    "name": "Ergonomía",
    "slug": "ergonomia-industrial",
    "icon": "Activity",
    "description": "Soluciones antifatiga y soporte ergonómico para jornadas prolongadas.",
    "count": 1,
    "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
    "riskTypes": [
      "ergonomia"
    ]
  }
];

export const brands = [
"3M",
"ABUS",
"Ansell",
"INSAFE",
"JOPZ",
"JUBA",
"No especificada",
"PIP",
"SHOWA",
"WEARWELL",
"YOKE"
];

export const riskFilters: Array<{ id: RiskType; label: string; icon: string }> = [
  { id: "electrico", label: "Eléctrico", icon: "Bolt" },
  { id: "corte", label: "Corte", icon: "Scissors" },
  { id: "quimico", label: "Químico", icon: "FlaskConical" },
  { id: "termico", label: "Térmico", icon: "Flame" },
  { id: "altura", label: "Altura", icon: "MoveUp" },
  { id: "senalizacion", label: "Señalización", icon: "TriangleAlert" },
  { id: "ergonomia", label: "Ergonomía", icon: "Activity" },
];

export const WHATSAPP_NUMBER = "50499999999";

export function buildWhatsAppUrl(productName?: string): string {
  const message = productName
    ? `Hola, quiero cotizar el producto: ${productName}`
    : "Hola, me gustaría solicitar una cotización de productos de seguridad industrial.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
