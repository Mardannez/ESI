export interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number | null;
  availability: "Disponible" | "Bajo pedido";
  image: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export const products: Product[] = [
{
  id: 1,
  name: "Casco de Seguridad Industrial Amarillo",
  category: "Cascos",
  brand: "SafePro",
  price: 350,
  availability: "Disponible",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1758afb4a-1779252721309.png",
  description: "Casco de seguridad resistente para protección en obras de construcción, bodegas e industria en general. Cumple normas ANSI Z89.1.",
  features: [
  "Material ABS de alta resistencia",
  "Ajuste interno regulable tipo trinquete",
  "Suspensión de 4 puntos",
  "Resistente a impactos y penetración",
  "Color amarillo alta visibilidad",
  "Peso: 380g aprox."],

  featured: true
},
{
  id: 2,
  name: "Casco Dieléctrico Blanco Clase E",
  category: "Cascos",
  brand: "SafePro",
  price: 420,
  availability: "Disponible",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_158ccbf5b-1779252722177.png",
  description: "Casco dieléctrico clase E para trabajo en instalaciones eléctricas de alta tensión. Protección hasta 20,000 voltios.",
  features: [
  "Clase E – protección eléctrica hasta 20kV",
  "Material polietileno de alta densidad",
  "Sin partes metálicas",
  "Ajuste interno de 6.5 a 8",
  "Color blanco",
  "Certificado ANSI/ISEA Z89.1"],

  featured: false
},
{
  id: 3,
  name: "Guantes Industriales Anticorte Nivel 5",
  category: "Guantes",
  brand: "WorkSafe",
  price: 180,
  availability: "Disponible",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c3dc06f7-1777881775479.png",
  description: "Guantes de alta resistencia al corte nivel 5, ideales para manejo de materiales filosos, vidrio y metales.",
  features: [
  "Nivel de corte 5 (máximo)",
  "Recubrimiento de nitrilo en palma",
  "Dorso de fibra de vidrio y acero",
  "Tallas: S, M, L, XL",
  "Lavables a máquina",
  "Agarre reforzado en húmedo y seco"],

  featured: true
},
{
  id: 4,
  name: "Guantes de Látex Industrial Reforzado",
  category: "Guantes",
  brand: "WorkSafe",
  price: 95,
  availability: "Disponible",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dbd514a5-1765185557962.png",
  description: "Guantes de látex con palma texturizada para excelente agarre en ambientes húmedos y con aceites.",
  features: [
  "Material: látex natural reforzado",
  "Palma texturizada antideslizante",
  "Puño largo de 30cm",
  "Resistente a ácidos y bases diluidas",
  "Tallas: M, L, XL",
  "Reutilizables"],

  featured: false
},
{
  id: 5,
  name: "Bota de Seguridad Punta de Acero",
  category: "Botas",
  brand: "IronStep",
  price: 950,
  availability: "Disponible",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eca9080d-1765185558376.png",
  description: "Bota industrial de cuero con puntera de acero y suela antideslizante resistente a aceites e hidrocarburos.",
  features: [
  "Puntera de acero ASTM F2413",
  "Cuero genuino de alta resistencia",
  "Suela de goma antideslizante",
  "Plantilla antibacterial removible",
  "Resistente a aceites e hidrocarburos",
  "Tallas: 38 al 46"],

  featured: true
},
{
  id: 6,
  name: "Bota Dieléctrica sin Puntera Metálica",
  category: "Botas",
  brand: "IronStep",
  price: 1100,
  availability: "Bajo pedido",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b084ade0-1779252722536.png",
  description: "Bota dieléctrica para electricistas, sin partes metálicas, protección contra descargas eléctricas.",
  features: [
  "Sin partes metálicas en toda la bota",
  "Suela dieléctrica aislante",
  "Material: cuero y materiales sintéticos",
  "Resistente a perforación",
  "Certificada ASTM F2413-18",
  "Tallas: 38 al 45"],

  featured: false
},
{
  id: 7,
  name: "Chaleco Reflectivo Clase 2 Naranja",
  category: "Chalecos",
  brand: "VisioSafe",
  price: 120,
  availability: "Disponible",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1abde4c28-1767420355406.png",
  description: "Chaleco de alta visibilidad clase 2 con cintas reflectivas de 5cm para trabajo en vías y zonas de riesgo.",
  features: [
  "Clase 2 de alta visibilidad",
  "Cintas reflectivas de 5cm de ancho",
  "Material: malla transpirable",
  "Cierre de velcro frontal",
  "Tallas: S/M, L/XL, 2XL/3XL",
  "Color: naranja fluorescente"],

  featured: true
},
{
  id: 8,
  name: "Lentes de Seguridad Claros Antiempañantes",
  category: "Protección Visual",
  brand: "ClearVision",
  price: 85,
  availability: "Disponible",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14e3e32a3-1764676652509.png",
  description: "Lentes de seguridad con lente claro antiempañante para trabajo en interiores y exteriores con baja luminosidad.",
  features: [
  "Lente policarbonato antiempañante",
  "Protección UV 99%",
  "Resistencia al impacto ANSI Z87.1",
  "Marco envolvente de cobertura lateral",
  "Patillas ajustables",
  "Peso: 28g"],

  featured: false
},
{
  id: 9,
  name: "Respirador Media Cara N95 con Válvula",
  category: "Protección Respiratoria",
  brand: "AirShield",
  price: 280,
  availability: "Disponible",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18e2035a3-1772129713921.png",
  description: "Respirador reutilizable media cara con filtros N95 intercambiables y válvula de exhalación para mayor comodidad.",
  features: [
  "Filtración N95 – 95% de partículas",
  "Válvula de exhalación para comodidad",
  "Silicón suave de doble sellado facial",
  "Filtros intercambiables incluidos",
  "Ajuste de arnés de 4 puntos",
  "Tallas: S, M, L"],

  featured: true
},
{
  id: 10,
  name: "Arnés de Seguridad Cuerpo Completo 5 Puntos",
  category: "Trabajo en Alturas",
  brand: "HeightPro",
  price: 1850,
  availability: "Disponible",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c424ba22-1766150689334.png",
  description: "Arnés de cuerpo completo de 5 puntos de anclaje para trabajo en alturas, andamios y espacios confinados.",
  features: [
  "5 puntos de anclaje certificados",
  "Hebillas de aluminio de liberación rápida",
  "Correas de poliéster de 45mm",
  "Resistencia mínima 22kN",
  "Certificado ANSI Z359.1",
  "Tallas: S/M, L/XL"],

  featured: true
},
{
  id: 11,
  name: "Señal de Prohibición Redonda – No Fumar",
  category: "Señalización",
  brand: "SignalPro",
  price: 45,
  availability: "Disponible",
  image: "https://images.unsplash.com/photo-1724128187108-a570edd53507",
  description: "Señal de prohibición fotoluminiscente para interiores y exteriores, resistente a la intemperie.",
  features: [
  "Material: PVC rígido 1.5mm",
  "Fotoluminiscente de larga duración",
  "Resistente a UV y humedad",
  "Tamaño: 20x20cm",
  "Adhesivo posterior incluido",
  "Norma ISO 7010"],

  featured: false
},
{
  id: 12,
  name: "Tapones Auditivos de Espuma NRR 33dB",
  category: "Protección Auditiva",
  brand: "SoundGuard",
  price: 15,
  availability: "Disponible",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_191a55fc9-1779252720364.png",
  description: "Tapones de espuma de poliuretano con máxima reducción de ruido NRR 33dB para ambientes industriales de alto ruido.",
  features: [
  "Reducción de ruido: NRR 33dB",
  "Material: espuma de poliuretano suave",
  "Diseño cónico de fácil inserción",
  "Uso de un solo uso (desechables)",
  "Presentación: par individual o caja x200",
  "Certificado ANSI S3.19"],

  featured: false
},
{
  id: 13,
  name: "Overol de Trabajo Azul con Reflectivos",
  category: "Ropa de Trabajo",
  brand: "WorkPro",
  price: 680,
  availability: "Disponible",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dcb27f14-1767461210366.png",
  description: "Overol de trabajo en tela drill 100% algodón con cintas reflectivas para alta visibilidad en campo.",
  features: [
  "Tela drill 100% algodón 240g/m²",
  "Cintas reflectivas en pecho y espalda",
  "Múltiples bolsillos funcionales",
  "Cierre YKK de alta durabilidad",
  "Tallas: S al 3XL",
  "Color azul marino"],

  featured: false
},
{
  id: 14,
  name: "Lentes de Seguridad Oscuros para Exterior",
  category: "Protección Visual",
  brand: "ClearVision",
  price: 95,
  availability: "Disponible",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1449f01e0-1774983686221.png",
  description: "Lentes oscuros para trabajo exterior con alta exposición solar, filtro UV400 y resistencia al impacto.",
  features: [
  "Lente policarbonato oscuro UV400",
  "Resistencia al impacto ANSI Z87.1+",
  "Marco envolvente de cobertura total",
  "Patillas de temple flexible",
  "Ideal para trabajo en campo abierto",
  "Peso: 30g"],

  featured: false
}];


export const categories = [
{ id: 1, name: "Cascos", icon: "HardHat", description: "Protección craneal para todo tipo de industria", count: 2, image: "https://img.rocket.new/generatedImages/rocket_gen_img_12e845811-1779252722026.png" },
{ id: 2, name: "Guantes", icon: "Shield", description: "Protección de manos para trabajos industriales", count: 2, image: "https://img.rocket.new/generatedImages/rocket_gen_img_11ee0d21e-1779252722362.png" },
{ id: 3, name: "Botas", icon: "Footprints", description: "Calzado de seguridad industrial certificado", count: 2, image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ca1fdadb-1766585686953.png" },
{ id: 4, name: "Chalecos", icon: "Shirt", description: "Alta visibilidad para trabajo en campo", count: 1, image: "https://images.unsplash.com/photo-1602886019766-b558d889d0e3" },
{ id: 5, name: "Protección Visual", icon: "Eye", description: "Lentes y protectores faciales certificados", count: 2, image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e47dda60-1779252720962.png" },
{ id: 6, name: "Protección Respiratoria", icon: "Wind", description: "Respiradores y mascarillas industriales", count: 1, image: "https://img.rocket.new/generatedImages/rocket_gen_img_18df7419a-1779252722563.png" },
{ id: 7, name: "Trabajo en Alturas", icon: "MoveUp", description: "Arneses y equipos anticaída certificados", count: 1, image: "https://img.rocket.new/generatedImages/rocket_gen_img_13037b4bd-1779252721831.png" },
{ id: 8, name: "Señalización", icon: "TriangleAlert", description: "Señales industriales fotoluminiscentes", count: 1, image: "https://img.rocket.new/generatedImages/rocket_gen_img_10638ea13-1779252722532.png" },
{ id: 9, name: "Protección Auditiva", icon: "Ear", description: "Tapones y orejeras para ambientes ruidosos", count: 1, image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b8cc04a4-1779252743237.png" },
{ id: 10, name: "Ropa de Trabajo", icon: "Layers", description: "Overoles, camisas y pantalones industriales", count: 1, image: "https://img.rocket.new/generatedImages/rocket_gen_img_18bd4eb1c-1779252721840.png" }];


export const brands = ["SafePro", "WorkSafe", "IronStep", "VisioSafe", "ClearVision", "AirShield", "HeightPro", "SignalPro", "SoundGuard", "WorkPro"];

export const WHATSAPP_NUMBER = "50499999999";

export function buildWhatsAppUrl(productName?: string): string {
  const message = productName ?
  `Hola, quiero cotizar el producto: ${productName}` :
  "Hola, me gustaría solicitar una cotización de productos de seguridad industrial.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}