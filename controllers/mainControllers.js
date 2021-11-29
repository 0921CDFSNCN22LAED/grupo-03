const path = require('path');

const products = [{
        id: 1,
        name: "Disco Duro Interno Western Digital WD5000LPCX 500GB",
        desc: "Western Digital es una marca de renombre mundial en almacenamiento de datos con la cual podés crear, experimentar y guardar contenidos a través de una amplia gama de dispositivos. La alta seguridad y rendimiento que brindan sus unidades la convierten en una de las empresas más elegidas del mercado. El WD5000LPCX se caracteriza por su eficiencia y buen funcionamiento, que sumado a su reducido consumo energético lo vuelven un disco indispensable para funciones estándar.",
        caract: "Disco Duro Interno - Marca: Western Digital - Modelo WD3200LPVX - Capacidad:500 GB - Tecnología de almacenamiento:HDD - Caché de datos: 8 MB - Interfaces: SATA III - Sistemas de archivos soportados: Windows",
        size: "Ancho: 69.85 mm - Altura: 100.2  - Profundidad: 7 mm - Peso: 0.09 k",
        color: "azul",
        precio: "$3.700",
        disc: 5,
        codigo: "IDPRODUCTO000101",
        preciodesc: "$3.515",
        imagen1: "/img/discoduro500-1.webp",
        imagen2: "/img/discoduro500-2.webp",
        imagen3: "/img/oferta2.jpg",
        ruta: (id) => {

            return "/productDetail/".concat(id);
        }
    },
    {
        id: 2,
        name: "Disco Duro Interno Western Digital WD5000LPCX 320GB",
        desc: "Western Digital es una marca de renombre mundial en almacenamiento de datos con la cual podés crear, experimentar y guardar contenidos a través de una amplia gama de dispositivos. La alta seguridad y rendimiento que brindan sus unidades la convierten en una de las empresas más elegidas del mercado. El WD5000LPCX se caracteriza por su eficiencia y buen funcionamiento, que sumado a su reducido consumo energético lo vuelven un disco indispensable para funciones estándar.",
        caract: "Disco Duro Interno - Marca: Western Digital - Modelo WD3200LPVX - Capacidad:320 GB - Tecnología de almacenamiento:HDD - Caché de datos: 8 MB - Interfaces: SATA III - Sistemas de archivos soportados: Windows",
        size: "Ancho: 69.85 mm - Altura: 100.2  - Profundidad: 7 mm - Peso: 0.09",
        color: "azul",
        precio: "$3.160",
        disc: 5,
        codigo: "IDPRODUCTO000102",
        preciodesc: "$3.002",
        imagen1: "/img/discoduro320-img1.webp",
        imagen2: "/img/discoduro320-img2.webp",
        imagen3: "/img/oferta2.jpg",
        ruta: (id) => {

            return "/productDetail/".concat(id);
        }
    },
    {
        id: 3,
        name: "Disco duro interno Toshiba MQ01ABD Series MQ01ABD032 320GB",
        desc: "Disco duro para mejorar el rendimiento del equipo. Toshiba MQ01ABD032 es lo que necesitás.Al ser HDD,su practicidad y valor económico respecto a otros tipos de discos marcan la diferencia.",
        caract: "Disco Duro Interno - Marca: Toshiba - MQ01ABD032 - Capacidad:320 GB - Tecnología de almacenamiento:HDD - Interfaces: SATA III",
        size: "Tamaño de 2.5. Ancho: 69.85 mm - Altura: 100.45 mm - Peso: 107 g",
        color: "-",
        precio: "$1.900",
        disc: 0,
        codigo: "IDPRODUCTO000103",
        preciodesc: "$1.900",
        imagen1: "/img/discoduro320toshiba-img1.webp",
        imagen2: "/img/discoduro320toshiba-img2.webp",
        imagen3: "/img/oferta2.jpg",
        ruta: (id) => {

            return "/productDetail/".concat(id);
        }
    },
    {
        id: 4,
        name: "Gabinete Gamer Xigmatek Eros Rgb Atx Vidrio Templado",
        desc: "Xigmatek EROS, una nueva carcasa para PC con LED arcoíris multimodo dinámico programado, también viene con un vidrio templado en el lado izquierdo perfecto para la visualización de la construcción del sistema, estructura de chasis de carcasa con todas las funciones y fácil administración de cables, admitirá placas base ATX, M-ATX con CPU Espacio más fresco a 158 mm y longitud máxima de la tarjeta VGA a 290 mm, esta es una carcasa de PC genial con todas las características que necesitará para construir la PC de sus sueños.",
        caract: "Gabinete Gamer - Marca: Xigmatek - Linea ATX - Modelos: EROS",
        size: "Altura x Ancho x Largo: 425 mm x 190 mm x 368 mm",
        color: "Negro",
        precio: "$5.750",
        disc: 0,
        codigo: "IDPRODUCTO000104",
        preciodesc: "$5.750",
        imagen1: "/img/gabinategamervidrio-1.webp",
        imagen2: "/img/gabinategamervidrio-2.webp",
        imagen3: "/img/gabinategamervidrio-3.webp",
        ruta: (id) => {

            return "/productDetail/".concat(id);
        },
    },
    {
        id: 5,
        name: "Gabinete Gamer Xigmatek Venom X Artic Argb Filtros Calidad",
        desc: "Gabinete que incluye 4 COOLER ARGB, con 2 paneles de vidrio templado frontal y lateral izquierdo. Diseño superior del chasis de ventilación y flujo de aire. Filtro de polvo fácil y extraíble para una rápida limpieza del polvo. Compatibilidad con radiadores de refrigeración líquida: Delantero 240 mm y trasero 120 mm",
        caract: "Gabinete Gamer - Marca: Xigmatek - Linea VENOM X ARTIC - Modelos: VENOM X ARTIC",
        size: "Altura x Ancho x Largo: 435 cm x 200 mm x 435 mm",
        color: "-",
        precio: "$18.000",
        disc: 10,
        codigo: "IDPRODUCTO000105",
        preciodesc: "$16.200",
        imagen1: "/img/gabinetegamervenom-1.webp",
        imagen2: "/img/gabinetegamervenom-2.webp",
        imagen3: "/img/gabinetegamervenom-3.webp",
        ruta: (id) => {

            return "/productDetail/".concat(id);
        },
    },
    {
        id: 6,
        name: "Gabinete Corsair 110r Negro Con Ventana",
        desc: "CORSAIR 110R es un chasis semitorre ATX minimalista con un panel lateral de cristal templado de 4 mm de grosor y la posibilidad de colocar hasta cuatro unidades, además de una bahía de disco óptico de 5,25 pulgadas.",
        caract: "Gabinete- Marca: Corsair - Linea: Gabinete - Modelos: CC-9011183-WW",
        size: "Altura x Ancho x Largo: 418mm x 210mm x 480mm",
        color: "negro",
        precio: "$9.800",
        disc: 0,
        codigo: "IDPRODUCTO000106",
        preciodesc: "$9.800",
        imagen1: "/img/gabinete-corsair-negro-c-vent-1.webp",
        imagen2: "/img/gabinete-corsair-negro-c-vent-2.webp",
        imagen3: "/img/gabinete-corsair-negro-c-vent-3.webp",
        ruta: (id) => {

            return "/productDetail/".concat(id);
        },
    },
    {
        id: 7,
        name: "Water Cooler Master Aio Masterliquid Ml240l V2 Argb 240mm",
        desc: "Bomba de doble cámara de nueva generación. Área de superficie ampliada en el radiador. Nuevo SickleFlow 120 ARGB. Sellado reforzado para la prevención antifugas. Nuevo diseño de bomba con componentes internos mejorados para una mayor resistencia al desgaste y un rendimiento más duradero. EPDM de grado industrial especialmente formulado utilizado para sellado reforzado para la prevención de fugas.",
        caract: "Coler- Marca: Cooler Master - Linea: MasterLiquid Lite - Modelos: MLW-D24M-A18PA-R2",
        size: "Altura x Ancho x Largo: 418mm x 210mm x 480mm",
        color: " - ",
        precio: "$17.400",
        disc: 0,
        codigo: "IDPRODUCTO000107",
        preciodesc: "$17.400",
        imagen1: "/img/cooler-master-1.webp",
        imagen2: "/img/cooler-master-3.webp",
        imagen3: "/img/cooler-master-2.webp",
        ruta: (id) => {

            return "/productDetail/".concat(id);
        },
    },
    {
        id: 8,
        name: "Cpu Fan Coolermaster Masterair Ma410m Argb Amd Intel",
        desc: "Cooler air listo para instalar de alta resistencia y durabilidad.",
        caract: "Cooler- Marca: Cooler Master - Linea: MasterAir - Modelos: MAM-T4PN-218PC-R1",
        size: "Altura x Ancho x Largo: 111.8 x 130.9 x 165.1 mm",
        color: " Negro ",
        precio: "$12.999",
        disc: -1,
        codigo: "IDPRODUCTO000108",
        preciodesc: "$15.999",
        imagen1: "/img/coolermaster-1.webp",
        imagen2: "/img/coolermaster-4.webp",
        imagen3: "/img/coolermaster-2.webp",
        ruta: (id) => {

            return "/productDetail/".concat(id);
        },
    },
    {
        id: 9,
        name: "Fan Led Cooler 80 X 80 Colores Rgb 4 Pines Cpu 80mm Ditron",
        desc: "Cooler con 4 pines de color transparente y salida de 24V 2W.",
        caract: "Cooler- Marca: Ditron - Linea: Fan Led 8 - Modelos: FANLED8",
        size: "Tamaño del ventilador: 8 cm",
        color: "Transparente",
        precio: "$400",
        disc: -1,
        codigo: "IDPRODUCTO000109",
        preciodesc: "$400",
        imagen1: "/img/fan-led-cooler-2.webp",
        imagen2: "/img/fan-led-cooler-1.webp",
        imagen3: "/img/fan-led-cooler-3.webp",
        ruta: (id) => {

            return "/productDetail/".concat(id);
        },
    },
    {
        id: 10,
        name: "Motherboard Asus B250 Mining Expert - 19 Slots Mineria",
        desc: "Motherboard con capacidad maxima RAM: 64 GB, plataforma: Intel, Ranuras de expansión: 1 x PCI Express 3.0 x16 (x16 mode),2 x PCI Express 3.0 x1, son procesador",
        caract: "Motherboard- Marca: Asus - Linea: Prime - Modelos: B250M-A",
        size: "Tamaño 28cm x 24.4cm",
        color: "-",
        precio: "$110.000",
        disc: 0,
        codigo: "IDPRODUCTO000110",
        preciodesc: "$110.000",
        imagen1: "/img/mother-asus-1.webp",
        imagen2: "/img/mother-asus-2.webp",
        imagen3: "/img/mother-asus-3.webp",
        ruta: (id) => {

            return "/productDetail/".concat(id);
        },
    },
    {

        id: 11,
        name: "Motherboard Gigabyte B450 Aorus Elite V2am4 Ryzen Ddr4 Pcreg",
        desc: "Motherboard Gigabyte para PC, con plataforma AMD y capacidad maxima de memoria de 128 RAM, tipo de memoria RAM: DDR4 y con 1x PCIe x16,1x PCIe x4,1x PCIe x1  y sin procesador.",
        caract: "Motherboard- Marca: Gigabyte - Linea: AORUS - Modelos: B450M AORUS ELITE",
        size: "Tamaño 24.4cm x 24.4cm",
        color: "-",
        precio: "$128.500",
        disc: 0,
        codigo: "IDPRODUCTO000111",
        preciodesc: "$128.500",
        imagen1: "/img/mother-gigabytes-1.webp",
        imagen2: "/img/mother-gigabytes-2.webp",
        imagen3: "/img/mother-gigabytes-3.webp",
        ruta: (id) => {

            return "/productDetail/".concat(id);
        },
    },
    {
        id: 12,
        name: "Procesador AMD Ryzen 7 5700G 100-100000263BOX de 8 núcleos y 4.6GHz de frecuencia con gráfica integrada",
        desc: "AMD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios, con nucleo el corazón del procesador, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo.",
        caract: "Motherboard- Marca: AMD - Linea: Ryzen 7 - Modelos: 5700G",
        size: "Arquitectura: x86-64",
        color: "-",
        disc: 5,
        precio: "$55.000,00",
        codigo: "IDPRODUCTO000112",
        preciodesc: "$52.250",
        imagen1: "/img/Procesador-Ryzen-1.webp",
        imagen2: "/img/Procesador-Ryzen-2.jpg",
        imagen3: "/img/oferta3.png",
        ruta: (id) => {

            return "/productDetail/".concat(id);
        },
    },
    {
        id: 13,
        name: "Procesador gamer Intel Core i7-10700K BX8070110700K de 8 núcleos y 5.1GHz de frecuencia con gráfica integrada",
        desc: "INTEL, asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos, con núcleos en el corazón del procesado y máxima potencia.",
        caract: "Procesador- Marca: Intel - Linea: Core i7 - Modelos: i7-10700K",
        size: "Arquitectura: x86-64",
        color: "-",
        precio: "$45.000",
        disc: 0,
        codigo: "IDPRODUCTO000113",
        preciodesc: "$45.000",
        imagen1: "/img/proc-core-i7-8nuc-1.webp",
        imagen2: "/img/proc-core-i7-8nuc-2.webp",
        imagen3: "/img/proc-core-i7-8nuc-3.webp",
        ruta: (id) => {
            return "/productDetail/".concat(id);
        },
    },
    {
        id: 14,
        name: "Fuente de alimentación para PC Redragon RPGS GC-PS001 500W negra 100V/240V",
        desc: "Esta fuente asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos, con núcleos en el corazón del procesado y máxima potencia, caracteristicas: Control de temperatura - Sin ruido ni distracciones - Protección asegurada.",
        caract: "Fuente- Marca: Redragon- Linea: RPGS - Modelos: GC-PS001",
        size: "Arquitectura: x86-64",
        color: "-",
        precio: "$5.100",
        disc: 0,
        codigo: "IDPRODUCTO000114",
        preciodesc: "$5.100",
        imagen1: "/img/fuente-redragon-3.webp",
        imagen2: "/img/fuente-redragon-2.webp",
        imagen3: "/img/fuente-redragon-1.webp",
        ruta: (id) => {

            return "/productDetail/".concat(id);
        },
    },
    {
        id: 15,
        name: "Mother Z590-a Asus Prime Lga 1200 Intel 10 Y 11 Gen",
        desc: "ASUS Prime Z590-A es perfecto para aquellos que buscan crear una construcción elegante y de aspecto futurista, gracias a su acabado en blanco y negro y su placa de identificación metálica iridiscente y la cubierta de PCB.",
        caract: "Fuente- Marca: Asus - Linea: Prime - Modelos: Z590-A",
        size: "Plataforma: Intel - Chipset: Z590 - Ranuras de expansión: 1 x ranura PCIe 3.0 x4,3 ranuras PCIe 4.0 / 3.0 x16- Capacidad Maxima: RAM: 128 GB.- Tipo de memoria RAM: DDR4",
        color: "-",
        precio: "$29.900",
        disc: 0,
        codigo: "IDPRODUCTO000115",
        preciodesc: "$29.000",
        imagen1: "/img/mother.jpg",
        imagen2: "/img/mother2.webp",
        imagen3: "/img/mother3.webp",
        ruta: (id) => {

            return "/productDetail/".concat(id);
        }
    },
    {
        id: 16,
        name: "Mouse Gamer Inalámbrico Óptico Rgb Recargable Silencioso",
        desc: "Mouse óptico inalámbrico para juegos de 2.4Ghz para computadora portátil y de escritorio",
        caract: "Fuente- Marca: RBG - Linea: Prime - Modelos: GAmerPro",
        size: "Duración: La batería dura entre 7 días y 30 días según se use con o sin luz.  - Método de seguimiento: Óptico - Tipo: 2.4Ghz inalámbrico - Tipo de interfaz: USB - DPI: 1600 - Estilo: MINI, resistente al agua, inalámbrico - Orientación de la mano: Derecha - Interfaz: USB 2.0 - Batería: 450 mAH - Característica: Portátil - Uso: Ordenador PC portátil - Peso: 120g",
        color: "-",
        precio: "$4.000",
        disc: 5,
        codigo: "IDPRODUCTO000116",
        preciodesc: "$3.600",
        imagen1: "/img/mouse-inal-gamer-optico-rbg-1.webp",
        imagen2: "/img/mouse-inal-gamer-optico-rbg-2.webp",
        imagen3: "/img/mouse-inal-gamer-optico-rbg-3.webp",
        ruta: (id) => {

            return "/productDetail/".concat(id);
        }
    },

]

const controller = {
    home: (req, res) => {
        res.render("index");
    },
    login: (req, res) => {
        res.render("login");
    },
    register: (req, res) => {
        res.render("register");
    },
    productCart: (req, res) => {
        res.render("productCart");
    },
    armaTuPc: (req, res) => {
        res.render("armaTuPc");
    },
    recupero: (req, res) => {
        res.render("recupero");
    },
    history: (req, res) => {
        res.render("history");
    },
    error: (req, res) => {
        res.render("error");
    },
    createUpdateProd: (req, res) => {
        res.render("createUpdateProd");
    },
    productTotals: (req, res) => {
        res.render("productTotals", { products: products });
    },
    productDetail: (req, res) => {
        const idProduct = req.params.id;
        const product = products.find((product) => {
            return idProduct == product.id;
        });
        if (product) {
            res.render('productDetail', {
                product: product,
                idProduct: idProduct,
            });
        } else {
            res.render("error")
        }
    },

}

module.exports = controller;