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
  sourceUrl?: string;
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
    "image": "/assets/images/CHALECO_JOPZ_MALLA_VERDE_CINTA REFLECTIVA_CON_VELCRO.png",
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
    "image": "/assets/images/GUANTE_DIELÉCTRICO_X1000_VOLTIOS_CLASE_00_JUBA.png",
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
    "image": "/assets/images/GUANTE_DIELÉCTRICO_X5000_VOLTIOS_CLASE_0_JUBA.png",
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
    "image": "/assets/images/GUANTE_ANTICORTE_GRIS_PU_GRIS_EN_PALMA_JUBA.png",
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
    "image": "/assets/images/GUANTE_QUÍMICO_NITRILO_VERDE_SIN_FORRO_18’_ANSELL_37185.png",
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
    "image": "/assets/images/GUANTE_BAJA_TEMP_LATEX_EN_PALM_GRIS_SHOWA.png",
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
    "image": "/assets/images/GUANTE_CUERO_GRIS_PULIDO_ELÉCTRICO_JOPZ.png",
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
    "image": "/assets/images/MANGA_100_PORCIENTO_KEVLAR_DUPONT_CORTES_ALTAS_TEMPERATURAS.png",
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
    "image": "/assets/images/BARBUQUEJO_CUATRO_PUNTOS_GRADUABLE INSAFE.png",
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
    "image": "/assets/images/CASCO_TIPO_I_DIELÉCTRICO_CONTRA_ALTO VOLTAJE_(30.000 VOLTIOS).png",
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
    "image": "/assets/images/ANTEOJO_OSCURO_JOPZ_MODELO_CUBE_CON_CORDÓN.png",
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
    "image": "/assets/images/TAPÓN_DESECHABLE_3M_1110_CON_CORDÓN_UNIDAD.png",
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
    "image": "/assets/images/RESPIRADOR_12_CARA_3M_6200_(SIN FILTROS).png",
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
    "image": "/assets/images/FILTRO_3M_PARA_GASES_Y_VAPORES_3M_6003.png",
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
    "image": "/assets/images/CUBRE_CUELLO_CON_CINTA_REFLECTIVA.png",
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
    "image": "/assets/images/CANDADO_LOTO_DE_ALUMINIO_DETECTABLE_40MM_ABUS_7240HB40.png",
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
    "image": "/assets/images/ETIQUETA_PEQUEÑA_DE_BLOQUEO_PAQ_100UNDS_ABUS.png",
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
    "availability": "Disponible",
    "image": "/assets/images/ARNÉS_4_ARGOLLAS_CON_SOPORTE_LUMBAR.png",
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
    "availability": "Disponible",
    "image": "/assets/images/ARNÉS_4_ARGOLLAS_EN_X.png",
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
    "availability": "Disponible",
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
    "availability": "Disponible",
    "image": "/assets/images/ESLINGA_DE_POSICIONAMIENTO_EN_REATA_REGULABLE.png",
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
    "availability": "Disponible",
    "image": "/assets/images/ANCLAJE_REGULABLE_DE_UNA_ARGOLLA_1.8M.png",
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
    "availability": "Disponible",
    "image": "/assets/images/ANCLAJE_DIELÉCTRICO_REGULABLE_DE_UNA ARGOLLA_1,8M.png",
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
    "availability": "Disponible",
    "image": "/assets/images/LÍNEA_DE_VIDA_VERTICAL_EN_CUERDA TRENZADA_14MM_30_MT.png",
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
    "availability": "Disponible",
    "image": "/assets/images/ESLINGA_SENCILLA_CON_ABSORBEDOR_Y_GANCHOS_MIXTOS.png",
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
    "availability": "Disponible",
    "image": "/assets/images/ESLINGA_EN_Y_CON_ABSORBEDOR.png",
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
    "availability": "Disponible",
    "image": "/assets/images/FRENO_ARRESTADOR_AUTOMÁTICO_PARA CUERDA_DE_12_A_14 MM.png",
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
    "availability": "Disponible",
    "image": "/assets/images/MOSQUETÓN_CARABINERO_3_SEGUROS AUTOMÁTICO_8.8_OZ.250G.png",
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
    "image": "/assets/images/CINTA_ANTIDERRAPANTE_NEGRA_3M_ADHESIVA 2X60_PIES.png",
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
    "image": "/assets/images/ROLLO_CINTA_DE_PRECAUCIÓN_3X1000_YARDAS _MARILLO.png",
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
    "image": "/assets/images/ROLLO_CINTA_DE_PELIGRO_ROJA_3X1000_YARDAS_ROJA.png",
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
    "image": "/assets/images/ALFOMBRA_ERGONÓMICA_ANTIFATIGA_1516_DE 3'X5'_WEARWELL.png",
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
  },
  {
    "id": 34,
    "code": "S21TX",
    "name": "Dexterity Pro™ S21TX",
    "originalName": "Dexterity Pro™ S21TX",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Corte - industria alimenticia",
    "riskTypes": [
      "corte"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/S21TX.webp",
    "shortDescription": "Guante ultrafino de máxima protección contra cortes, diseñado para conservar una excelente destreza y sensibilidad.",
    "description": "Guante ultrafino de máxima protección contra cortes, diseñado para conservar una excelente destreza y sensibilidad. Su tejido TenActiv™ brinda protección de 360° con resistencia al corte ANSI A9. Es apto para manipulación de alimentos y puede utilizarse como guante principal o como forro en tareas que requieren precisión.",
    "features": [
      "Aplicación principal: Corte - industria alimenticia.",
      "Guante ultrafino de máxima protección contra cortes, diseñado para conservar una excelente destreza y sensibilidad.",
      "Su tejido TenActiv™ brinda protección de 360° con resistencia al corte ANSI A9.",
      "Es apto para manipulación de alimentos y puede utilizarse como guante principal o como forro en tareas que requieren precisión."
    ],
    "applications": [
      "Corte - industria alimenticia"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Dexterity Pro™ S21TX",
      "S21TX",
      "Superior Glove",
      "Corte - industria alimenticia"
    ],
    "cta": "Solicita cotización de Dexterity Pro™ S21TX y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/dexterity-pros21tx/"
  },
  {
    "id": 35,
    "code": "S21TA",
    "name": "Dexterity Pro™ S21TA",
    "originalName": "Dexterity Pro™ S21TA",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Corte - industria alimenticia",
    "riskTypes": [
      "corte"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/S21TA.webp",
    "shortDescription": "Guante ultrafino y cómodo, con protección contra cortes ANSI A5 y amplia libertad de movimiento.",
    "description": "Guante ultrafino y cómodo, con protección contra cortes ANSI A5 y amplia libertad de movimiento. Adecuado para manipulación de materiales, mantenimiento y procesamiento de alimentos. Su construcción favorece la sensibilidad táctil y permite utilizar pantallas táctiles sin necesidad de retirar el guante.",
    "features": [
      "Aplicación principal: Corte - industria alimenticia.",
      "Guante ultrafino y cómodo, con protección contra cortes ANSI A5 y amplia libertad de movimiento.",
      "Adecuado para manipulación de materiales, mantenimiento y procesamiento de alimentos.",
      "Su construcción favorece la sensibilidad táctil y permite utilizar pantallas táctiles sin necesidad de retirar el guante."
    ],
    "applications": [
      "Corte - industria alimenticia"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Dexterity Pro™ S21TA",
      "S21TA",
      "Superior Glove",
      "Corte - industria alimenticia"
    ],
    "cta": "Solicita cotización de Dexterity Pro™ S21TA y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/dexterity-pro-s21ta/"
  },
  {
    "id": 36,
    "code": "S10SXBDB",
    "name": "TenActiv Pro™ S10SXBDB",
    "originalName": "TenActiv Pro™ S10SXBDB",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Corte - carnicería / deshuese",
    "riskTypes": [
      "corte"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/S10SXBDB.webp",
    "shortDescription": "Guante especializado para procesamiento de carne y trabajos de deshuese, con protección extrema contra cortes ANSI A8 y refuerzos laterales resistentes a perforaciones.",
    "description": "Guante especializado para procesamiento de carne y trabajos de deshuese, con protección extrema contra cortes ANSI A8 y refuerzos laterales resistentes a perforaciones. Está orientado a tareas exigentes con cuchillos y bordes afilados, donde se necesita una combinación de protección, control y durabilidad.",
    "features": [
      "Aplicación principal: Corte - carnicería / deshuese.",
      "Guante especializado para procesamiento de carne y trabajos de deshuese, con protección extrema contra cortes ANSI A8 y refuerzos laterales resistentes a perforaciones.",
      "Está orientado a tareas exigentes con cuchillos y bordes afilados, donde se necesita una combinación de protección, control y durabilidad."
    ],
    "applications": [
      "Corte - carnicería / deshuese"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "TenActiv Pro™ S10SXBDB",
      "S10SXBDB",
      "Superior Glove",
      "Corte - carnicería / deshuese"
    ],
    "cta": "Solicita cotización de TenActiv Pro™ S10SXBDB y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/tenactiv-pro-s10sxbdb/"
  },
  {
    "id": 37,
    "code": "S21TAXRFN",
    "name": "Dexterity Pro™ S21TAXRFN",
    "originalName": "Dexterity Pro™ S21TAXRFN",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Corte, alimentos, pantallas táctiles y ESD",
    "riskTypes": [
      "corte"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/S21TAXRFN.webp",
    "shortDescription": "Guante ultrafino con protección contra cortes ANSI A5 y propiedades disipativas electrostáticas (ESD), apropiado para tareas con componentes electrónicos sensibles.",
    "description": "Guante ultrafino con protección contra cortes ANSI A5 y propiedades disipativas electrostáticas (ESD), apropiado para tareas con componentes electrónicos sensibles. El recubrimiento de nitrilo espumado mejora el agarre en condiciones húmedas. También es compatible con pantallas táctiles y apto para manipulación de alimentos.",
    "features": [
      "Aplicación principal: Corte, alimentos, pantallas táctiles y ESD.",
      "Guante ultrafino con protección contra cortes ANSI A5 y propiedades disipativas electrostáticas (ESD), apropiado para tareas con componentes electrónicos sensibles.",
      "El recubrimiento de nitrilo espumado mejora el agarre en condiciones húmedas.",
      "También es compatible con pantallas táctiles y apto para manipulación de alimentos."
    ],
    "applications": [
      "Corte, alimentos, pantallas táctiles y ESD"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Dexterity Pro™ S21TAXRFN",
      "S21TAXRFN",
      "Superior Glove",
      "Corte, alimentos, pantallas táctiles y ESD"
    ],
    "cta": "Solicita cotización de Dexterity Pro™ S21TAXRFN y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/dexterity-pro-s21taxrfn/"
  },
  {
    "id": 38,
    "code": "678KTA",
    "name": "Endura® 678KTA",
    "originalName": "Endura® 678KTA",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Guante multiusos",
    "riskTypes": [],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/678KTA.webp",
    "shortDescription": "Guante de cuero descarne sin forro para trabajos generales que requieren buena sensibilidad y movilidad de la mano.",
    "description": "Guante de cuero descarne sin forro para trabajos generales que requieren buena sensibilidad y movilidad de la mano. El cuero ayuda a absorber líquidos para favorecer el agarre y ofrece resistencia a perforaciones ANSI nivel 5. Una opción versátil para manipulación de materiales y tareas de mantenimiento.",
    "features": [
      "Aplicación principal: Guante multiusos.",
      "Guante de cuero descarne sin forro para trabajos generales que requieren buena sensibilidad y movilidad de la mano.",
      "El cuero ayuda a absorber líquidos para favorecer el agarre y ofrece resistencia a perforaciones ANSI nivel 5.",
      "Una opción versátil para manipulación de materiales y tareas de mantenimiento."
    ],
    "applications": [
      "Guante multiusos"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Endura® 678KTA",
      "678KTA",
      "Superior Glove",
      "Guante multiusos"
    ],
    "cta": "Solicita cotización de Endura® 678KTA y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/endura-678kta/"
  },
  {
    "id": 39,
    "code": "S13SXBHZ",
    "name": "TenActiv Pro™ S13SXBHZ",
    "originalName": "TenActiv Pro™ S13SXBHZ",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Corte - cocina / procesamiento de alimentos",
    "riskTypes": [
      "corte"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/S13SXBHZ.webp",
    "shortDescription": "Guante para procesamiento de alimentos y pesca, con alta protección contra cortes ANSI A6.",
    "description": "Guante para procesamiento de alimentos y pesca, con alta protección contra cortes ANSI A6. Su diseño incorpora tratamiento antimicrobiano y está pensado para entornos donde se manipulan cuchillas y alimentos. Se comercializa en versiones para mano izquierda y derecha, ofreciendo protección especializada para tareas de cocina y procesamiento.",
    "features": [
      "Aplicación principal: Corte - cocina / procesamiento de alimentos.",
      "Guante para procesamiento de alimentos y pesca, con alta protección contra cortes ANSI A6.",
      "Su diseño incorpora tratamiento antimicrobiano y está pensado para entornos donde se manipulan cuchillas y alimentos.",
      "Se comercializa en versiones para mano izquierda y derecha, ofreciendo protección especializada para tareas de cocina y procesamiento."
    ],
    "applications": [
      "Corte - cocina / procesamiento de alimentos"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "TenActiv Pro™ S13SXBHZ",
      "S13SXBHZ",
      "Superior Glove",
      "Corte - cocina / procesamiento de alimentos"
    ],
    "cta": "Solicita cotización de TenActiv Pro™ S13SXBHZ y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/tenactiv-pro-s13sxbhz/"
  },
  {
    "id": 40,
    "code": "S21TAXRFNB",
    "name": "Dexterity Pro™ S21TAXRFNB",
    "originalName": "Dexterity Pro™ S21TAXRFNB",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Corte + impacto",
    "riskTypes": [
      "corte"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/S21TAXRFNB.webp",
    "shortDescription": "Guante ultrafino con protección contra cortes ANSI A5 y protección contra impactos ANSI/ISEA 138 nivel 1 mediante protectores de perfil bajo.",
    "description": "Guante ultrafino con protección contra cortes ANSI A5 y protección contra impactos ANSI/ISEA 138 nivel 1 mediante protectores de perfil bajo. Su recubrimiento de nitrilo espumado proporciona agarre en húmedo y conserva una gran destreza. Es compatible con pantallas táctiles para facilitar el trabajo sin interrupciones.",
    "features": [
      "Aplicación principal: Corte + impacto.",
      "Guante ultrafino con protección contra cortes ANSI A5 y protección contra impactos ANSI/ISEA 138 nivel 1 mediante protectores de perfil bajo.",
      "Su recubrimiento de nitrilo espumado proporciona agarre en húmedo y conserva una gran destreza.",
      "Es compatible con pantallas táctiles para facilitar el trabajo sin interrupciones."
    ],
    "applications": [
      "Corte + impacto"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Dexterity Pro™ S21TAXRFNB",
      "S21TAXRFNB",
      "Superior Glove",
      "Corte + impacto"
    ],
    "cta": "Solicita cotización de Dexterity Pro™ S21TAXRFNB y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/products/dexterity-pro-s21taxrfnb/"
  },
  {
    "id": 41,
    "code": "KPW18TH",
    "name": "KnitActiv Pro™ KPW - variante KPW18TH",
    "originalName": "KnitActiv Pro™ KPW - variante KPW18TH",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Corte - protección de brazos",
    "riskTypes": [
      "corte"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/KPW18TH.webp",
    "shortDescription": "Manga de protección para brazos fabricada con material reciclado y diseñada para brindar protección contra cortes de 360° ANSI A2.",
    "description": "Manga de protección para brazos fabricada con material reciclado y diseñada para brindar protección contra cortes de 360° ANSI A2. La variante KPW18TH tiene 18 pulgadas de longitud, formato tubular y orificio para el pulgar, ayudando a mantener la cobertura durante tareas de manipulación y ensamblaje.",
    "features": [
      "Aplicación principal: Corte - protección de brazos.",
      "Manga de protección para brazos fabricada con material reciclado y diseñada para brindar protección contra cortes de 360° ANSI A2.",
      "La variante KPW18TH tiene 18 pulgadas de longitud, formato tubular y orificio para el pulgar, ayudando a mantener la cobertura durante tareas de manipulación y ensamblaje."
    ],
    "applications": [
      "Corte - protección de brazos"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "KnitActiv Pro™ KPW - variante KPW18TH",
      "KPW18TH",
      "Superior Glove",
      "Corte - protección de brazos"
    ],
    "cta": "Solicita cotización de KnitActiv Pro™ KPW - variante KPW18TH y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/knitactiv-pro-kpw/"
  },
  {
    "id": 42,
    "code": "KTAG18TH",
    "name": "TenActiv Pro™ KTAG - variante KTAG18TH",
    "originalName": "TenActiv Pro™ KTAG - variante KTAG18TH",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Corte - protección de brazos",
    "riskTypes": [
      "corte"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/KTAG18TH.webp",
    "shortDescription": "Manga tubular de alta resistencia contra cortes, diseñada para protección prolongada del brazo.",
    "description": "Manga tubular de alta resistencia contra cortes, diseñada para protección prolongada del brazo. El tejido TenActiv™ ofrece protección de 360° con resistencia al corte ANSI A6. La variante KTAG18TH mide 18 pulgadas e incorpora orificio para el pulgar para mejorar la estabilidad y cobertura durante el trabajo.",
    "features": [
      "Aplicación principal: Corte - protección de brazos.",
      "Manga tubular de alta resistencia contra cortes, diseñada para protección prolongada del brazo.",
      "El tejido TenActiv™ ofrece protección de 360° con resistencia al corte ANSI A6.",
      "La variante KTAG18TH mide 18 pulgadas e incorpora orificio para el pulgar para mejorar la estabilidad y cobertura durante el trabajo."
    ],
    "applications": [
      "Corte - protección de brazos"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "TenActiv Pro™ KTAG - variante KTAG18TH",
      "KTAG18TH",
      "Superior Glove",
      "Corte - protección de brazos"
    ],
    "cta": "Solicita cotización de TenActiv Pro™ KTAG - variante KTAG18TH y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/tenactiv-pro-ktag/"
  },
  {
    "id": 43,
    "code": "TCKVLO",
    "name": "ParaActiv™ TCKVLO",
    "originalName": "ParaActiv™ TCKVLO",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Calor + corte",
    "riskTypes": [
      "corte",
      "termico"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/TCKVLO.webp",
    "shortDescription": "Guante tejido para trabajos con exposición a calor y riesgo de corte.",
    "description": "Guante tejido para trabajos con exposición a calor y riesgo de corte. Ofrece resistencia al corte ANSI A4 y protección térmica ANSI nivel 4. Su puño tejido extendido aumenta la cobertura, mientras que la mezcla de algodón ayuda a absorber grasa y aceite para mejorar el control durante la manipulación.",
    "features": [
      "Aplicación principal: Calor + corte.",
      "Guante tejido para trabajos con exposición a calor y riesgo de corte.",
      "Ofrece resistencia al corte ANSI A4 y protección térmica ANSI nivel 4.",
      "Su puño tejido extendido aumenta la cobertura, mientras que la mezcla de algodón ayuda a absorber grasa y aceite para mejorar el control durante la manipulación."
    ],
    "applications": [
      "Calor + corte"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "ParaActiv™ TCKVLO",
      "TCKVLO",
      "Superior Glove",
      "Calor + corte"
    ],
    "cta": "Solicita cotización de ParaActiv™ TCKVLO y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/paraactiv-tckvlo/"
  },
  {
    "id": 44,
    "code": "TK835LG2",
    "name": "ParaActiv Pro™ TK835LG2",
    "originalName": "ParaActiv Pro™ TK835LG2",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Calor + corte",
    "riskTypes": [
      "corte",
      "termico"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/TK835LG2.webp",
    "shortDescription": "Guante de alta protección térmica para trabajos exigentes, con resistencia al corte ANSI A5 y al calor ANSI nivel 5.",
    "description": "Guante de alta protección térmica para trabajos exigentes, con resistencia al corte ANSI A5 y al calor ANSI nivel 5. Incorpora puño de cuero de 4 pulgadas para mayor cobertura y un forro interior de algodón que aporta comodidad durante jornadas prolongadas.",
    "features": [
      "Aplicación principal: Calor + corte.",
      "Guante de alta protección térmica para trabajos exigentes, con resistencia al corte ANSI A5 y al calor ANSI nivel 5.",
      "Incorpora puño de cuero de 4 pulgadas para mayor cobertura y un forro interior de algodón que aporta comodidad durante jornadas prolongadas."
    ],
    "applications": [
      "Calor + corte"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "ParaActiv Pro™ TK835LG2",
      "TK835LG2",
      "Superior Glove",
      "Calor + corte"
    ],
    "cta": "Solicita cotización de ParaActiv Pro™ TK835LG2 y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/paraactiv-pro-tk835lg2/"
  },
  {
    "id": 45,
    "code": "TRFGK",
    "name": "ParaActiv Pro™ TRFGK",
    "originalName": "ParaActiv Pro™ TRFGK",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Calor + corte - metal",
    "riskTypes": [
      "corte",
      "termico"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/TRFGK.webp",
    "shortDescription": "Guante diseñado para fabricación y manipulación de metal caliente, con resistencia al corte ANSI A5 y protección térmica ANSI nivel 5.",
    "description": "Guante diseñado para fabricación y manipulación de metal caliente, con resistencia al corte ANSI A5 y protección térmica ANSI nivel 5. Su construcción tejida de alto desempeño y el puño extendido ayudan a brindar cobertura adicional en tareas donde se combinan calor, bordes afilados y materiales pesados.",
    "features": [
      "Aplicación principal: Calor + corte - metal.",
      "Guante diseñado para fabricación y manipulación de metal caliente, con resistencia al corte ANSI A5 y protección térmica ANSI nivel 5.",
      "Su construcción tejida de alto desempeño y el puño extendido ayudan a brindar cobertura adicional en tareas donde se combinan calor, bordes afilados y materiales pesados."
    ],
    "applications": [
      "Calor + corte - metal"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "ParaActiv Pro™ TRFGK",
      "TRFGK",
      "Superior Glove",
      "Calor + corte - metal"
    ],
    "cta": "Solicita cotización de ParaActiv Pro™ TRFGK y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/paraactiv-pro-trfgk/"
  },
  {
    "id": 46,
    "code": "NS300B",
    "name": "SolvStop™ NS300B",
    "originalName": "SolvStop™ NS300B",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Cuartos fríos - hasta -5 °C",
    "riskTypes": [
      "termico"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/NS300B.webp",
    "shortDescription": "Guante impermeable de PVC de alta visibilidad para manipulación de alimentos, limpieza y tareas en ambientes fríos.",
    "description": "Guante impermeable de PVC de alta visibilidad para manipulación de alimentos, limpieza y tareas en ambientes fríos. Mantiene flexibilidad a temperaturas de hasta aproximadamente -5 °C y brinda una barrera frente a líquidos, facilitando el trabajo en áreas húmedas y cámaras de refrigeración.",
    "features": [
      "Aplicación principal: Cuartos fríos - hasta -5 °C.",
      "Guante impermeable de PVC de alta visibilidad para manipulación de alimentos, limpieza y tareas en ambientes fríos.",
      "Mantiene flexibilidad a temperaturas de hasta aproximadamente -5 °C y brinda una barrera frente a líquidos, facilitando el trabajo en áreas húmedas y cámaras de refrigeración."
    ],
    "applications": [
      "Cuartos fríos - hasta -5 °C"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "SolvStop™ NS300B",
      "NS300B",
      "Superior Glove",
      "Cuartos fríos - hasta -5 °C"
    ],
    "cta": "Solicita cotización de SolvStop™ NS300B y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/solvstop-ns300b/"
  },
  {
    "id": 47,
    "code": "NS230PU",
    "name": "SolvStop™ NS230PU",
    "originalName": "SolvStop™ NS230PU",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Cuartos fríos - hasta -15 °C",
    "riskTypes": [
      "termico"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/NS230PU.webp",
    "shortDescription": "Guante totalmente recubierto de poliuretano, impermeable y diseñado para conservar flexibilidad en frío hasta aproximadamente -15 °C.",
    "description": "Guante totalmente recubierto de poliuretano, impermeable y diseñado para conservar flexibilidad en frío hasta aproximadamente -15 °C. Su color naranja de alta visibilidad facilita la identificación de las manos. Adecuado para cámaras frías, manipulación de materiales y trabajos donde se requiere protección frente a humedad.",
    "features": [
      "Aplicación principal: Cuartos fríos - hasta -15 °C.",
      "Guante totalmente recubierto de poliuretano, impermeable y diseñado para conservar flexibilidad en frío hasta aproximadamente -15 °C.",
      "Su color naranja de alta visibilidad facilita la identificación de las manos.",
      "Adecuado para cámaras frías, manipulación de materiales y trabajos donde se requiere protección frente a humedad."
    ],
    "applications": [
      "Cuartos fríos - hasta -15 °C"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "SolvStop™ NS230PU",
      "NS230PU",
      "Superior Glove",
      "Cuartos fríos - hasta -15 °C"
    ],
    "cta": "Solicita cotización de SolvStop™ NS230PU y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/solvstop-ns230pu/"
  },
  {
    "id": 48,
    "code": "505KGWS",
    "name": "Endura Pro™ 505KGWS",
    "originalName": "Endura Pro™ 505KGWS",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Soldadura",
    "riskTypes": [
      "termico"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/505KGWS.webp",
    "shortDescription": "Guante de soldadura con electrodo diseñado para proteger frente a calor y riesgos de corte.",
    "description": "Guante de soldadura con electrodo diseñado para proteger frente a calor y riesgos de corte. El forro ParaActiv™ aporta resistencia al corte ANSI A5 y protección térmica ANSI nivel 2. El puño largo tipo guantelete extiende la cobertura hacia muñeca y antebrazo durante los trabajos de soldadura.",
    "features": [
      "Aplicación principal: Soldadura.",
      "Guante de soldadura con electrodo diseñado para proteger frente a calor y riesgos de corte.",
      "El forro ParaActiv™ aporta resistencia al corte ANSI A5 y protección térmica ANSI nivel 2.",
      "El puño largo tipo guantelete extiende la cobertura hacia muñeca y antebrazo durante los trabajos de soldadura."
    ],
    "applications": [
      "Soldadura"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Endura Pro™ 505KGWS",
      "505KGWS",
      "Superior Glove",
      "Soldadura"
    ],
    "cta": "Solicita cotización de Endura Pro™ 505KGWS y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/endura-pro-505kgws/"
  },
  {
    "id": 49,
    "code": "505BU",
    "name": "Endura® 505BU",
    "originalName": "Endura® 505BU",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Soldadura",
    "riskTypes": [
      "termico"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/505BU.webp",
    "shortDescription": "Guante de soldadura con electrodo, resistente al calor y con puño tipo guantelete extendido.",
    "description": "Guante de soldadura con electrodo, resistente al calor y con puño tipo guantelete extendido. Ofrece protección térmica ANSI nivel 2 y ayuda a proteger manos y antebrazos frente a chispas, calor y abrasión. Una alternativa práctica para trabajos generales de soldadura y fabricación.",
    "features": [
      "Aplicación principal: Soldadura.",
      "Guante de soldadura con electrodo, resistente al calor y con puño tipo guantelete extendido.",
      "Ofrece protección térmica ANSI nivel 2 y ayuda a proteger manos y antebrazos frente a chispas, calor y abrasión.",
      "Una alternativa práctica para trabajos generales de soldadura y fabricación."
    ],
    "applications": [
      "Soldadura"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Endura® 505BU",
      "505BU",
      "Superior Glove",
      "Soldadura"
    ],
    "cta": "Solicita cotización de Endura® 505BU y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/endura-505bu/"
  },
  {
    "id": 50,
    "code": "399GKGL5",
    "name": "Endura® 399GKGL5",
    "originalName": "Endura® 399GKGL5",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Soldadura",
    "riskTypes": [
      "termico"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/399GKGL5.webp",
    "shortDescription": "Guante versátil de piel de cabra para fabricación y soldadura MIG.",
    "description": "Guante versátil de piel de cabra para fabricación y soldadura MIG. Ofrece protección frente a arco eléctrico CAT 4, resistencia al corte ANSI A4 y protección térmica ANSI nivel 3. Su puño de guantelete extendido aumenta la cobertura, manteniendo una buena combinación de movilidad y resistencia.",
    "features": [
      "Aplicación principal: Soldadura.",
      "Guante versátil de piel de cabra para fabricación y soldadura MIG.",
      "Ofrece protección frente a arco eléctrico CAT 4, resistencia al corte ANSI A4 y protección térmica ANSI nivel 3.",
      "Su puño de guantelete extendido aumenta la cobertura, manteniendo una buena combinación de movilidad y resistencia."
    ],
    "applications": [
      "Soldadura"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Endura® 399GKGL5",
      "399GKGL5",
      "Superior Glove",
      "Soldadura"
    ],
    "cta": "Solicita cotización de Endura® 399GKGL5 y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/endura-399gkgl5/"
  },
  {
    "id": 51,
    "code": "CG0SKT",
    "name": "Endura® CG0SKT",
    "originalName": "Endura® CG0SKT",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Riesgo eléctrico - protector de cuero",
    "riskTypes": [],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/CG0SKT.webp",
    "shortDescription": "Guante protector de cuero diseñado para utilizarse sobre guantes dieléctricos Line Pro de Clase 00 y Clase 0.",
    "description": "Guante protector de cuero diseñado para utilizarse sobre guantes dieléctricos Line Pro de Clase 00 y Clase 0. Incorpora pulgar tipo keystone y correa ajustable de nylon, aportando protección mecánica al guante aislante sin sacrificar el ajuste necesario para tareas eléctricas.",
    "features": [
      "Aplicación principal: Riesgo eléctrico - protector de cuero.",
      "Guante protector de cuero diseñado para utilizarse sobre guantes dieléctricos Line Pro de Clase 00 y Clase 0.",
      "Incorpora pulgar tipo keystone y correa ajustable de nylon, aportando protección mecánica al guante aislante sin sacrificar el ajuste necesario para tareas eléctricas."
    ],
    "applications": [
      "Riesgo eléctrico - protector de cuero"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Endura® CG0SKT",
      "CG0SKT",
      "Superior Glove",
      "Riesgo eléctrico - protector de cuero"
    ],
    "cta": "Solicita cotización de Endura® CG0SKT y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/endura-cg0skt/"
  },
  {
    "id": 52,
    "code": "NR00B28",
    "name": "Line Pro™ NR00B28",
    "originalName": "Line Pro™ NR00B28",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Riesgo eléctrico - Clase 00",
    "riskTypes": [],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/NR00B28.webp",
    "shortDescription": "Guante dieléctrico de caucho Clase 00 conforme a ANSI/ASTM D120, destinado a protección frente a tensión de uso de hasta 500 V.",
    "description": "Guante dieléctrico de caucho Clase 00 conforme a ANSI/ASTM D120, destinado a protección frente a tensión de uso de hasta 500 V. Para proteger el caucho contra daños mecánicos se recomienda utilizarlo con un guante protector de cuero compatible, como el Endura® CG0SKT.",
    "features": [
      "Aplicación principal: Riesgo eléctrico - Clase 00.",
      "Guante dieléctrico de caucho Clase 00 conforme a ANSI/ASTM D120, destinado a protección frente a tensión de uso de hasta 500 V.",
      "Para proteger el caucho contra daños mecánicos se recomienda utilizarlo con un guante protector de cuero compatible, como el Endura® CG0SKT."
    ],
    "applications": [
      "Riesgo eléctrico - Clase 00"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Line Pro™ NR00B28",
      "NR00B28",
      "Superior Glove",
      "Riesgo eléctrico - Clase 00"
    ],
    "cta": "Solicita cotización de Line Pro™ NR00B28 y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/line-pro-nr00b28/"
  },
  {
    "id": 53,
    "code": "NR0B28",
    "name": "Line Pro™ NR0B28",
    "originalName": "Line Pro™ NR0B28",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Riesgo eléctrico - Clase 0",
    "riskTypes": [],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/NR0B28.webp",
    "shortDescription": "Guante dieléctrico de caucho Clase 0 conforme a ANSI/ASTM D120, diseñado para trabajos eléctricos con tensión de uso de hasta 1.000 V.",
    "description": "Guante dieléctrico de caucho Clase 0 conforme a ANSI/ASTM D120, diseñado para trabajos eléctricos con tensión de uso de hasta 1.000 V. Se recomienda combinarlo con un protector exterior de cuero compatible, como el Endura® CG0SKT, para preservar la integridad del guante aislante.",
    "features": [
      "Aplicación principal: Riesgo eléctrico - Clase 0.",
      "Guante dieléctrico de caucho Clase 0 conforme a ANSI/ASTM D120, diseñado para trabajos eléctricos con tensión de uso de hasta 1.000 V.",
      "Se recomienda combinarlo con un protector exterior de cuero compatible, como el Endura® CG0SKT, para preservar la integridad del guante aislante."
    ],
    "applications": [
      "Riesgo eléctrico - Clase 0"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Line Pro™ NR0B28",
      "NR0B28",
      "Superior Glove",
      "Riesgo eléctrico - Clase 0"
    ],
    "cta": "Solicita cotización de Line Pro™ NR0B28 y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/line-pro-nr0b28/"
  },
  {
    "id": 54,
    "code": "CG1SS",
    "name": "Endura® CG1SS",
    "originalName": "Endura® CG1SS",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Riesgo eléctrico - protector de cuero",
    "riskTypes": [],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/CG1SS.webp",
    "shortDescription": "Guante protector de cuero diseñado para utilizarse sobre guantes dieléctricos Line Pro Clase 1, especialmente el NR1BR36.",
    "description": "Guante protector de cuero diseñado para utilizarse sobre guantes dieléctricos Line Pro Clase 1, especialmente el NR1BR36. Cuenta con pulgar tipo keystone y correa negra ajustable, combinando durabilidad, destreza y ajuste. Su función es proteger mecánicamente el guante aislante utilizado debajo.",
    "features": [
      "Aplicación principal: Riesgo eléctrico - protector de cuero.",
      "Guante protector de cuero diseñado para utilizarse sobre guantes dieléctricos Line Pro Clase 1, especialmente el NR1BR36.",
      "Cuenta con pulgar tipo keystone y correa negra ajustable, combinando durabilidad, destreza y ajuste.",
      "Su función es proteger mecánicamente el guante aislante utilizado debajo."
    ],
    "applications": [
      "Riesgo eléctrico - protector de cuero"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Endura® CG1SS",
      "CG1SS",
      "Superior Glove",
      "Riesgo eléctrico - protector de cuero"
    ],
    "cta": "Solicita cotización de Endura® CG1SS y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/products/endura-cg1ss/"
  },
  {
    "id": 55,
    "code": "NR1BR36",
    "name": "Line Pro™ NR1BR36",
    "originalName": "Line Pro™ NR1BR36",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Riesgo eléctrico - Clase 1",
    "riskTypes": [],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/NR1BR36.webp",
    "shortDescription": "Guante dieléctrico de caucho Clase 1 conforme a ANSI/ASTM D120, para riesgos eléctricos con tensión de uso de hasta 7.500 V.",
    "description": "Guante dieléctrico de caucho Clase 1 conforme a ANSI/ASTM D120, para riesgos eléctricos con tensión de uso de hasta 7.500 V. Su combinación de capas roja y negra facilita detectar daños. Debe complementarse con un protector de cuero adecuado, como el Endura® CG1SS.",
    "features": [
      "Aplicación principal: Riesgo eléctrico - Clase 1.",
      "Guante dieléctrico de caucho Clase 1 conforme a ANSI/ASTM D120, para riesgos eléctricos con tensión de uso de hasta 7.500 V.",
      "Su combinación de capas roja y negra facilita detectar daños.",
      "Debe complementarse con un protector de cuero adecuado, como el Endura® CG1SS."
    ],
    "applications": [
      "Riesgo eléctrico - Clase 1"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Line Pro™ NR1BR36",
      "NR1BR36",
      "Superior Glove",
      "Riesgo eléctrico - Clase 1"
    ],
    "cta": "Solicita cotización de Line Pro™ NR1BR36 y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/line-pro-nr1br36/"
  },
  {
    "id": 56,
    "code": "NR2BR36",
    "name": "Line Pro™ NR2BR36",
    "originalName": "Line Pro™ NR2BR36",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Riesgo eléctrico - Clase 2",
    "riskTypes": [],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/NR2BR36.webp",
    "shortDescription": "Guante dieléctrico de caucho Clase 2 conforme a ANSI/ASTM D120, diseñado para trabajos eléctricos con tensión de uso de hasta 17.000 V.",
    "description": "Guante dieléctrico de caucho Clase 2 conforme a ANSI/ASTM D120, diseñado para trabajos eléctricos con tensión de uso de hasta 17.000 V. El contraste de colores facilita identificar daños en la superficie. Debe utilizarse con el protector de cuero correspondiente según el sistema de protección eléctrica.",
    "features": [
      "Aplicación principal: Riesgo eléctrico - Clase 2.",
      "Guante dieléctrico de caucho Clase 2 conforme a ANSI/ASTM D120, diseñado para trabajos eléctricos con tensión de uso de hasta 17.000 V.",
      "El contraste de colores facilita identificar daños en la superficie.",
      "Debe utilizarse con el protector de cuero correspondiente según el sistema de protección eléctrica."
    ],
    "applications": [
      "Riesgo eléctrico - Clase 2"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Line Pro™ NR2BR36",
      "NR2BR36",
      "Superior Glove",
      "Riesgo eléctrico - Clase 2"
    ],
    "cta": "Solicita cotización de Line Pro™ NR2BR36 y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/line-pro-nr2br36/"
  },
  {
    "id": 57,
    "code": "LF3020",
    "name": "SolvStop™ LF3020",
    "originalName": "SolvStop™ LF3020",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Químicos + alimentos",
    "riskTypes": [
      "quimico"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/LF3020.webp",
    "shortDescription": "Guante de látex de 18 mil para protección química y tareas de mantenimiento en la industria alimentaria.",
    "description": "Guante de látex de 18 mil para protección química y tareas de mantenimiento en la industria alimentaria. Su longitud brinda cobertura adicional del antebrazo y la palma texturizada mejora el agarre. Está diseñado para manipulación de alimentos y trabajos donde existe exposición a líquidos y determinadas sustancias químicas.",
    "features": [
      "Aplicación principal: Químicos + alimentos.",
      "Guante de látex de 18 mil para protección química y tareas de mantenimiento en la industria alimentaria.",
      "Su longitud brinda cobertura adicional del antebrazo y la palma texturizada mejora el agarre.",
      "Está diseñado para manipulación de alimentos y trabajos donde existe exposición a líquidos y determinadas sustancias químicas."
    ],
    "applications": [
      "Químicos + alimentos"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "SolvStop™ LF3020",
      "LF3020",
      "Superior Glove",
      "Químicos + alimentos"
    ],
    "cta": "Solicita cotización de SolvStop™ LF3020 y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/solvstop-lf3020/"
  },
  {
    "id": 58,
    "code": "NI3012",
    "name": "SolvStop™ NI3012",
    "originalName": "SolvStop™ NI3012",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Químicos - nitrilo + alimentos",
    "riskTypes": [
      "quimico"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/NI3012.webp",
    "shortDescription": "Guante de nitrilo de 12 mil y aproximadamente 30 cm de longitud, diseñado para resistir una amplia variedad de químicos y solventes, incluidos aceites, combustibles y metanol.",
    "description": "Guante de nitrilo de 12 mil y aproximadamente 30 cm de longitud, diseñado para resistir una amplia variedad de químicos y solventes, incluidos aceites, combustibles y metanol. La palma texturizada favorece un agarre firme y el producto es apto para tareas de manipulación de alimentos.",
    "features": [
      "Aplicación principal: Químicos - nitrilo + alimentos.",
      "Guante de nitrilo de 12 mil y aproximadamente 30 cm de longitud, diseñado para resistir una amplia variedad de químicos y solventes, incluidos aceites, combustibles y metanol.",
      "La palma texturizada favorece un agarre firme y el producto es apto para tareas de manipulación de alimentos."
    ],
    "applications": [
      "Químicos - nitrilo + alimentos"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "SolvStop™ NI3012",
      "NI3012",
      "Superior Glove",
      "Químicos - nitrilo + alimentos"
    ],
    "cta": "Solicita cotización de SolvStop™ NI3012 y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/solvstop-ni3012/"
  },
  {
    "id": 59,
    "code": "RDCNPF",
    "name": "KeepKleen® RDCNPF",
    "originalName": "KeepKleen® RDCNPF",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Desechable - industria + alimentos",
    "riskTypes": [],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/RDCNPF.webp",
    "shortDescription": "Guante desechable de nitrilo azul de 4 mil, sin polvo, diseñado para ofrecer alta sensibilidad táctil y facilitar la detección visual de contaminación.",
    "description": "Guante desechable de nitrilo azul de 4 mil, sin polvo, diseñado para ofrecer alta sensibilidad táctil y facilitar la detección visual de contaminación. El puño enrollado ayuda a aumentar la resistencia al desgarro. Es apto para manipulación de alimentos y tareas industriales que requieren higiene y precisión.",
    "features": [
      "Aplicación principal: Desechable - industria + alimentos.",
      "Guante desechable de nitrilo azul de 4 mil, sin polvo, diseñado para ofrecer alta sensibilidad táctil y facilitar la detección visual de contaminación.",
      "El puño enrollado ayuda a aumentar la resistencia al desgarro.",
      "Es apto para manipulación de alimentos y tareas industriales que requieren higiene y precisión."
    ],
    "applications": [
      "Desechable - industria + alimentos"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "KeepKleen® RDCNPF",
      "RDCNPF",
      "Superior Glove",
      "Desechable - industria + alimentos"
    ],
    "cta": "Solicita cotización de KeepKleen® RDCNPF y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/keepkleen-rdcnpf/"
  },
  {
    "id": 60,
    "code": "SM35TAX",
    "name": "SolvStop Pro™ SM35TAX",
    "originalName": "SolvStop Pro™ SM35TAX",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Corte + químicos + alimentos",
    "riskTypes": [
      "corte",
      "quimico"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/SM35TAX.webp",
    "shortDescription": "Guante flexible de TPE que combina resistencia química con protección contra cortes ANSI A6.",
    "description": "Guante flexible de TPE que combina resistencia química con protección contra cortes ANSI A6. Su color azul favorece la detección visual de contaminación y está diseñado para trabajos de manipulación de alimentos. Brinda una alternativa de protección para tareas que requieren barrera frente a líquidos sin perder demasiada destreza.",
    "features": [
      "Aplicación principal: Corte + químicos + alimentos.",
      "Guante flexible de TPE que combina resistencia química con protección contra cortes ANSI A6.",
      "Su color azul favorece la detección visual de contaminación y está diseñado para trabajos de manipulación de alimentos.",
      "Brinda una alternativa de protección para tareas que requieren barrera frente a líquidos sin perder demasiada destreza."
    ],
    "applications": [
      "Corte + químicos + alimentos"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "SolvStop Pro™ SM35TAX",
      "SM35TAX",
      "Superior Glove",
      "Corte + químicos + alimentos"
    ],
    "cta": "Solicita cotización de SolvStop Pro™ SM35TAX y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/solvstop-pro-sm35tax/"
  },
  {
    "id": 61,
    "code": "S10LXPB",
    "name": "KnitActiv Pro™ S10LXPB",
    "originalName": "KnitActiv Pro™ S10LXPB",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Corte + punción + alimentos",
    "riskTypes": [
      "corte"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/S10LXPB.webp",
    "shortDescription": "Guante para manipulación de alimentos con protección frente a cortes y punzaduras.",
    "description": "Guante para manipulación de alimentos con protección frente a cortes y punzaduras. La palma ofrece alta resistencia a punción ANSI nivel 5 y protección contra cortes ANSI A5. Su recubrimiento de látex mejora el agarre en condiciones secas y aporta control al manipular herramientas, recipientes y materiales.",
    "features": [
      "Aplicación principal: Corte + punción + alimentos.",
      "Guante para manipulación de alimentos con protección frente a cortes y punzaduras.",
      "La palma ofrece alta resistencia a punción ANSI nivel 5 y protección contra cortes ANSI A5.",
      "Su recubrimiento de látex mejora el agarre en condiciones secas y aporta control al manipular herramientas, recipientes y materiales."
    ],
    "applications": [
      "Corte + punción + alimentos"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "KnitActiv Pro™ S10LXPB",
      "S10LXPB",
      "Superior Glove",
      "Corte + punción + alimentos"
    ],
    "cta": "Solicita cotización de KnitActiv Pro™ S10LXPB y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/knitactiv-pro-s10lxpb/"
  },
  {
    "id": 62,
    "code": "PS13TAXPUE",
    "name": "TenActiv™ PS13TAXPUE",
    "originalName": "TenActiv™ PS13TAXPUE",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Corte - opción económica",
    "riskTypes": [
      "corte"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/PS13TAXPUE.webp",
    "shortDescription": "Guante de costo competitivo para protección moderada contra cortes ANSI A4.",
    "description": "Guante de costo competitivo para protección moderada contra cortes ANSI A4. El recubrimiento de poliuretano en la palma proporciona buen agarre en seco y conserva la sensibilidad de la mano. Es compatible con pantallas táctiles y libre de látex, adecuado para montaje, manipulación y tareas generales de producción.",
    "features": [
      "Aplicación principal: Corte - opción económica.",
      "Guante de costo competitivo para protección moderada contra cortes ANSI A4.",
      "El recubrimiento de poliuretano en la palma proporciona buen agarre en seco y conserva la sensibilidad de la mano.",
      "Es compatible con pantallas táctiles y libre de látex, adecuado para montaje, manipulación y tareas generales de producción."
    ],
    "applications": [
      "Corte - opción económica"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "TenActiv™ PS13TAXPUE",
      "PS13TAXPUE",
      "Superior Glove",
      "Corte - opción económica"
    ],
    "cta": "Solicita cotización de TenActiv™ PS13TAXPUE y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/tenactiv-ps13taxpue/"
  },
  {
    "id": 63,
    "code": "PS15TAXPNQ",
    "name": "TenActiv Pro™ PS15TAXPNQ",
    "originalName": "TenActiv Pro™ PS15TAXPNQ",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Corte - opción económica",
    "riskTypes": [
      "corte"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/PS15TAXPNQ.webp",
    "shortDescription": "Guante económico de alta protección contra cortes ANSI A6, con recubrimiento de nitrilo microporoso.",
    "description": "Guante económico de alta protección contra cortes ANSI A6, con recubrimiento de nitrilo microporoso. Ofrece agarre confiable en ambientes húmedos o aceitosos y mantiene una buena libertad de movimiento. Es libre de látex y está orientado a tareas industriales donde se busca protección elevada a un costo eficiente.",
    "features": [
      "Aplicación principal: Corte - opción económica.",
      "Guante económico de alta protección contra cortes ANSI A6, con recubrimiento de nitrilo microporoso.",
      "Ofrece agarre confiable en ambientes húmedos o aceitosos y mantiene una buena libertad de movimiento.",
      "Es libre de látex y está orientado a tareas industriales donde se busca protección elevada a un costo eficiente."
    ],
    "applications": [
      "Corte - opción económica"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "TenActiv Pro™ PS15TAXPNQ",
      "PS15TAXPNQ",
      "Superior Glove",
      "Corte - opción económica"
    ],
    "cta": "Solicita cotización de TenActiv Pro™ PS15TAXPNQ y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/tenactiv-pro-ps15taxpnq/"
  },
  {
    "id": 64,
    "code": "76YBDQ",
    "name": "Endura® 76YBDQ",
    "originalName": "Endura® 76YBDQ",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Uso general / manipulación",
    "riskTypes": [],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/76YBDQ.webp",
    "shortDescription": "Guante tipo fitter de ajuste holgado, pensado para uso general durante jornadas prolongadas.",
    "description": "Guante tipo fitter de ajuste holgado, pensado para uso general durante jornadas prolongadas. La palma de piel de vacuno aporta durabilidad, mientras que el forro de algodón transpirable ayuda a controlar la humedad y mejorar la comodidad. Adecuado para manipulación de materiales, carga, mantenimiento y labores generales.",
    "features": [
      "Aplicación principal: Uso general / manipulación.",
      "Guante tipo fitter de ajuste holgado, pensado para uso general durante jornadas prolongadas.",
      "La palma de piel de vacuno aporta durabilidad, mientras que el forro de algodón transpirable ayuda a controlar la humedad y mejorar la comodidad.",
      "Adecuado para manipulación de materiales, carga, mantenimiento y labores generales."
    ],
    "applications": [
      "Uso general / manipulación"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Endura® 76YBDQ",
      "76YBDQ",
      "Superior Glove",
      "Uso general / manipulación"
    ],
    "cta": "Solicita cotización de Endura® 76YBDQ y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/endura-76ybdq/"
  },
  {
    "id": 65,
    "code": "STN336K",
    "name": "KnitActiv™ STN336K",
    "originalName": "KnitActiv™ STN336K",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Industria alimenticia / forro",
    "riskTypes": [],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/STN336K.webp",
    "shortDescription": "Guante de inspección suave, flexible y de alta destreza, diseñado para generar poca pelusa.",
    "description": "Guante de inspección suave, flexible y de alta destreza, diseñado para generar poca pelusa. Su formato ambidiestro y lavable permite utilizarlo solo o como forro debajo de guantes desechables. Es apto para manipulación de alimentos y tareas donde se requiere limpieza, tacto y comodidad.",
    "features": [
      "Aplicación principal: Industria alimenticia / forro.",
      "Guante de inspección suave, flexible y de alta destreza, diseñado para generar poca pelusa.",
      "Su formato ambidiestro y lavable permite utilizarlo solo o como forro debajo de guantes desechables.",
      "Es apto para manipulación de alimentos y tareas donde se requiere limpieza, tacto y comodidad."
    ],
    "applications": [
      "Industria alimenticia / forro"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "KnitActiv™ STN336K",
      "STN336K",
      "Superior Glove",
      "Industria alimenticia / forro"
    ],
    "cta": "Solicita cotización de KnitActiv™ STN336K y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/knitactiv-stn336k/"
  },
  {
    "id": 66,
    "code": "378A",
    "name": "Endura® 378A",
    "originalName": "Endura® 378A",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Uso general / manipulación",
    "riskTypes": [],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/378A.webp",
    "shortDescription": "Guante de cuero vacuno para uso general, apropiado para manipulación de materiales, construcción ligera y limpieza de obra.",
    "description": "Guante de cuero vacuno para uso general, apropiado para manipulación de materiales, construcción ligera y limpieza de obra. El pulgar tipo keystone favorece la movilidad y la durabilidad, mientras que la muñeca elástica ayuda a mantener un ajuste cómodo y seguro durante el trabajo.",
    "features": [
      "Aplicación principal: Uso general / manipulación.",
      "Guante de cuero vacuno para uso general, apropiado para manipulación de materiales, construcción ligera y limpieza de obra.",
      "El pulgar tipo keystone favorece la movilidad y la durabilidad, mientras que la muñeca elástica ayuda a mantener un ajuste cómodo y seguro durante el trabajo."
    ],
    "applications": [
      "Uso general / manipulación"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Endura® 378A",
      "378A",
      "Superior Glove",
      "Uso general / manipulación"
    ],
    "cta": "Solicita cotización de Endura® 378A y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/endura-378a/"
  },
  {
    "id": 67,
    "code": "66Q",
    "name": "Endura® 66Q",
    "originalName": "Endura® 66Q",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Uso general / manipulación",
    "riskTypes": [],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/66Q.webp",
    "shortDescription": "Guante económico tipo fitter de cuero descarne y ajuste holgado.",
    "description": "Guante económico tipo fitter de cuero descarne y ajuste holgado. La palma de cuero aporta durabilidad y ayuda a absorber líquidos para mejorar el agarre. El forro de algodón favorece la transpiración y el puño de seguridad facilita colocarlo y retirarlo en tareas generales de manipulación.",
    "features": [
      "Aplicación principal: Uso general / manipulación.",
      "Guante económico tipo fitter de cuero descarne y ajuste holgado.",
      "La palma de cuero aporta durabilidad y ayuda a absorber líquidos para mejorar el agarre.",
      "El forro de algodón favorece la transpiración y el puño de seguridad facilita colocarlo y retirarlo en tareas generales de manipulación."
    ],
    "applications": [
      "Uso general / manipulación"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Endura® 66Q",
      "66Q",
      "Superior Glove",
      "Uso general / manipulación"
    ],
    "cta": "Solicita cotización de Endura® 66Q y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/endura-66q/"
  },
  {
    "id": 68,
    "code": "MXBE",
    "name": "Clutch Gear™ MXBE",
    "originalName": "Clutch Gear™ MXBE",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Mecánica / automoción",
    "riskTypes": [],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/MXBE.webp",
    "shortDescription": "Guante estilo mecánico de costo eficiente y alta destreza para manipulación ligera.",
    "description": "Guante estilo mecánico de costo eficiente y alta destreza para manipulación ligera. Incorpora refuerzos en pulgar, índice y puntas de los dedos, dorso de nylon elástico y cierre ajustable de gancho y bucle. Diseñado para brindar movilidad y protección básica en mantenimiento, taller y automoción.",
    "features": [
      "Aplicación principal: Mecánica / automoción.",
      "Guante estilo mecánico de costo eficiente y alta destreza para manipulación ligera.",
      "Incorpora refuerzos en pulgar, índice y puntas de los dedos, dorso de nylon elástico y cierre ajustable de gancho y bucle.",
      "Diseñado para brindar movilidad y protección básica en mantenimiento, taller y automoción."
    ],
    "applications": [
      "Mecánica / automoción"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Clutch Gear™ MXBE",
      "MXBE",
      "Superior Glove",
      "Mecánica / automoción"
    ],
    "cta": "Solicita cotización de Clutch Gear™ MXBE y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/clutch-gear-mxbe/"
  },
  {
    "id": 69,
    "code": "MXGCE",
    "name": "Clutch Gear™ MXGCE",
    "originalName": "Clutch Gear™ MXGCE",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Mecánica / automoción",
    "riskTypes": [],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/MXGCE.webp",
    "shortDescription": "Guante mecánico económico, flexible y duradero.",
    "description": "Guante mecánico económico, flexible y duradero. Combina un dorso de spandex con palma de piel de cabra y refuerzos de descarne. El área entre pulgar e índice incorpora refuerzo adicional para prolongar la vida útil en trabajos de mantenimiento, manipulación de piezas y aplicaciones automotrices.",
    "features": [
      "Aplicación principal: Mecánica / automoción.",
      "Guante mecánico económico, flexible y duradero.",
      "Combina un dorso de spandex con palma de piel de cabra y refuerzos de descarne.",
      "El área entre pulgar e índice incorpora refuerzo adicional para prolongar la vida útil en trabajos de mantenimiento, manipulación de piezas y aplicaciones automotrices."
    ],
    "applications": [
      "Mecánica / automoción"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Clutch Gear™ MXGCE",
      "MXGCE",
      "Superior Glove",
      "Mecánica / automoción"
    ],
    "cta": "Solicita cotización de Clutch Gear™ MXGCE y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/clutch-gear-mxgce/"
  },
  {
    "id": 70,
    "code": "MXGBE",
    "name": "Clutch Gear™ MXGBE",
    "originalName": "Clutch Gear™ MXGBE",
    "category": "Protección para manos",
    "categorySlug": "proteccion-para-manos",
    "subcategory": "Mecánica / automoción",
    "riskTypes": [],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/MXGBE.webp",
    "shortDescription": "Guante mecánico económico con palma de microfibra sintética de secado rápido.",
    "description": "Guante mecánico económico con palma de microfibra sintética de secado rápido. Incluye refuerzos de PVC en palma y dedos para mejorar durabilidad y agarre, además de muñeca ajustable. Una opción funcional para mecánica, mantenimiento y manipulación de herramientas o componentes.",
    "features": [
      "Aplicación principal: Mecánica / automoción.",
      "Guante mecánico económico con palma de microfibra sintética de secado rápido.",
      "Incluye refuerzos de PVC en palma y dedos para mejorar durabilidad y agarre, además de muñeca ajustable.",
      "Una opción funcional para mecánica, mantenimiento y manipulación de herramientas o componentes."
    ],
    "applications": [
      "Mecánica / automoción"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Clutch Gear™ MXGBE",
      "MXGBE",
      "Superior Glove",
      "Mecánica / automoción"
    ],
    "cta": "Solicita cotización de Clutch Gear™ MXGBE y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/clutch-gear-mxgbe/"
  },
  {
    "id": 71,
    "code": "EGO",
    "name": "Superior® EGO",
    "originalName": "Superior® EGO",
    "category": "Protección para cabeza, vista, audición y respiración",
    "categorySlug": "proteccion-para-cabeza",
    "subcategory": "Protección ocular",
    "riskTypes": [],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/EGO.webp",
    "shortDescription": "Lentes de seguridad resistentes a rayaduras e impactos, con lentes de policarbonato que bloquean más del 99,9 % de la radiación UVA y UVB.",
    "description": "Lentes de seguridad resistentes a rayaduras e impactos, con lentes de policarbonato que bloquean más del 99,9 % de la radiación UVA y UVB. Incorporan patillas flexibles, almohadillas nasales suaves y cordón negro desprendible. Cumplen requisitos de protección ocular para entornos industriales y de trabajo.",
    "features": [
      "Aplicación principal: Protección ocular.",
      "Lentes de seguridad resistentes a rayaduras e impactos, con lentes de policarbonato que bloquean más del 99,9 % de la radiación UVA y UVB.",
      "Incorporan patillas flexibles, almohadillas nasales suaves y cordón negro desprendible.",
      "Cumplen requisitos de protección ocular para entornos industriales y de trabajo."
    ],
    "applications": [
      "Protección ocular"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Superior® EGO",
      "EGO",
      "Superior Glove",
      "Protección ocular"
    ],
    "cta": "Solicita cotización de Superior® EGO y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/superior-ego/"
  },
  {
    "id": 72,
    "code": "EGS",
    "name": "Superior® EGS",
    "originalName": "Superior® EGS",
    "category": "Protección para cabeza, vista, audición y respiración",
    "categorySlug": "proteccion-para-cabeza",
    "subcategory": "Protección ocular",
    "riskTypes": [],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/EGS.webp",
    "shortDescription": "Lentes de seguridad envolventes, resistentes a rayaduras y diseñados para protección de alto impacto.",
    "description": "Lentes de seguridad envolventes, resistentes a rayaduras y diseñados para protección de alto impacto. Las patillas de longitud ajustable y las almohadillas nasales suaves permiten adaptar el ajuste. Sus lentes de policarbonato ofrecen protección frente a radiación UV y están orientados a uso industrial.",
    "features": [
      "Aplicación principal: Protección ocular.",
      "Lentes de seguridad envolventes, resistentes a rayaduras y diseñados para protección de alto impacto.",
      "Las patillas de longitud ajustable y las almohadillas nasales suaves permiten adaptar el ajuste.",
      "Sus lentes de policarbonato ofrecen protección frente a radiación UV y están orientados a uso industrial."
    ],
    "applications": [
      "Protección ocular"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Superior® EGS",
      "EGS",
      "Superior Glove",
      "Protección ocular"
    ],
    "cta": "Solicita cotización de Superior® EGS y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/superior-egs/"
  },
  {
    "id": 73,
    "code": "TSPOX",
    "name": "Superior® TSPOX",
    "originalName": "Superior® TSPOX",
    "category": "Protección para cuerpo",
    "categorySlug": "proteccion-para-cuerpo",
    "subcategory": "Alta visibilidad",
    "riskTypes": [
      "senalizacion"
    ],
    "brand": "Superior Glove",
    "price": null,
    "availability": "Disponible",
    "image": "/assets/images/TSPOX.webp",
    "shortDescription": "Camiseta naranja de alta visibilidad fabricada en poliéster suave, transpirable y resistente al encogimiento.",
    "description": "Camiseta naranja de alta visibilidad fabricada en poliéster suave, transpirable y resistente al encogimiento. Incluye franjas retrorreflectantes de 2 pulgadas en frente y espalda para visibilidad de 360°. Está diseñada para trabajos donde la presencia visual del trabajador es un requisito importante de seguridad.",
    "features": [
      "Aplicación principal: Alta visibilidad.",
      "Camiseta naranja de alta visibilidad fabricada en poliéster suave, transpirable y resistente al encogimiento.",
      "Incluye franjas retrorreflectantes de 2 pulgadas en frente y espalda para visibilidad de 360°.",
      "Está diseñada para trabajos donde la presencia visual del trabajador es un requisito importante de seguridad."
    ],
    "applications": [
      "Alta visibilidad"
    ],
    "standard": "Consultar ficha técnica oficial.",
    "seoKeywords": [
      "Superior® TSPOX",
      "TSPOX",
      "Superior Glove",
      "Alta visibilidad"
    ],
    "cta": "Solicita cotización de Superior® TSPOX y recibe asesoría para seleccionar el equipo adecuado según tu operación.",
    "sourceUrl": "https://www.superiorglove.com/es/productos/superior-tspox/"
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
    "count": 2,
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
    "count": 45,
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
    "count": 9,
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
"Superior Glove",
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

export const WHATSAPP_NUMBER = "50487921620";

export function buildWhatsAppUrl(productName?: string): string {
  const message = productName
    ? `Hola, quiero cotizar el producto: ${productName}`
    : "Hola, me gustaría solicitar una cotización de productos de seguridad industrial.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
