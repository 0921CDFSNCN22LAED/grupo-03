-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: qmc
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carts_buy`
--

DROP TABLE IF EXISTS `carts_buy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts_buy` (
  `idCartsBuy` int(11) NOT NULL AUTO_INCREMENT,
  `idUser` int(11) NOT NULL,
  `totalPrice` int(11) NOT NULL,
  `dateBuy` date NOT NULL,
  `idPayment` int(11) NOT NULL,
  PRIMARY KEY (`idCartsBuy`),
  KEY `carts_buy_FK` (`idPayment`),
  KEY `carts_buy_FK_1` (`idUser`),
  CONSTRAINT `carts_buy_FK` FOREIGN KEY (`idPayment`) REFERENCES `payment_method` (`idPayment`),
  CONSTRAINT `carts_buy_FK_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts_buy`
--

LOCK TABLES `carts_buy` WRITE;
/*!40000 ALTER TABLE `carts_buy` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts_buy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts_products`
--

DROP TABLE IF EXISTS `carts_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts_products` (
  `idCartsProducts` int(11) NOT NULL AUTO_INCREMENT,
  `idCartsBuy` int(11) NOT NULL,
  `idProducts` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  PRIMARY KEY (`idCartsProducts`),
  KEY `carts_products_FK` (`idProducts`),
  KEY `carts_products_FK_1` (`idCartsBuy`),
  CONSTRAINT `carts_products_FK` FOREIGN KEY (`idProducts`) REFERENCES `products` (`id`),
  CONSTRAINT `carts_products_FK_1` FOREIGN KEY (`idCartsBuy`) REFERENCES `carts_buy` (`idCartsBuy`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts_products`
--

LOCK TABLES `carts_products` WRITE;
/*!40000 ALTER TABLE `carts_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories_prod`
--

DROP TABLE IF EXISTS `categories_prod`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories_prod` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_prod`
--

LOCK TABLES `categories_prod` WRITE;
/*!40000 ALTER TABLE `categories_prod` DISABLE KEYS */;
INSERT INTO `categories_prod` VALUES (1,'desktop'),(2,'office'),(3,'gaming'),(4,'tablet'),(5,'microprocesador'),(6,'motherboard'),(7,'almacenamiento'),(8,'memoria'),(9,'placavideo'),(10,'gabinete'),(11,'fuente'),(12,'cooler');
/*!40000 ALTER TABLE `categories_prod` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories_users`
--

DROP TABLE IF EXISTS `categories_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_users`
--

LOCK TABLES `categories_users` WRITE;
/*!40000 ALTER TABLE `categories_users` DISABLE KEYS */;
INSERT INTO `categories_users` VALUES (1,'user'),(2,'admin');
/*!40000 ALTER TABLE `categories_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_method`
--

DROP TABLE IF EXISTS `payment_method`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment_method` (
  `idPayment` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  PRIMARY KEY (`idPayment`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_method`
--

LOCK TABLES `payment_method` WRITE;
/*!40000 ALTER TABLE `payment_method` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_method` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `size` char(100) NOT NULL,
  `idCategory` int(11) NOT NULL,
  `idType` int(12) NOT NULL,
  `price` mediumint(9) NOT NULL,
  `disc` mediumint(9) NOT NULL,
  `image` tinytext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_FK` (`idCategory`),
  KEY `products_FK_1` (`idType`),
  CONSTRAINT `products_FK` FOREIGN KEY (`idCategory`) REFERENCES `categories_prod` (`id`),
  CONSTRAINT `products_FK_1` FOREIGN KEY (`idType`) REFERENCES `typeproduct` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Cpu Fan Coolermaster Masterair Ma410m Argb Amd Intel\"','Cooler- Marca: Cooler Master - Linea: MasterAir - Modelos: MAM-T4PN-218PC-R1','Altura x Ancho x Largo: 128 x 135 x 170 mm',12,1,15000,10,'/img/products/coolermaster-4.webp'),(2,'Disco Duro Interno Western Digital WD5000LPCX 500GB','Disco Duro Interno - Marca: Western Digital - Modelo WD3200LPVX - Capacidad:500 GB - TecnologÃƒÆ’Ã‚Â­a de almacenamiento:HDD - CachÃƒÆ’Ã‚Â© de datos: 8 MB - Interfaces: SATA III - Sistemas de archivos soportados: Windows','Ancho: 69.85 mm - Altura: 100.2  - Profundidad: 7 mm - Peso: 0.09 k',7,2,3700,5,'/img/products/discoduro500-1.webp'),(3,'Disco Duro Interno Western Digital WD5000LPCX 320GB','Disco Duro Interno - Marca: Western Digital - Modelo WD3200LPVX - Capacidad:320 GB - TecnologÃƒÂ­a de almacenamiento:HDD - CachÃƒÂ© de datos: 8 MB - Interfaces: SATA III - Sistemas de archivos soportados: Windows','Ancho: 69.85 mm - Altura: 100.2  - Profundidad: 7 mm - Peso: 0.09 k',7,1,3160,5,'/img/products/discoduro320-img2.webp'),(4,'Gabinete Gamer Xigmatek Eros Rgb Atx Vidrio Templado','Gabinete Gamer - Marca: Xigmatek - Linea ATX - Modelos: EROS','Altura x Ancho x Largo: 425 mm x 190 mm x 368 mm',10,2,5750,3,'/img/products/gabinategamervidrio-1.webp'),(5,'Water Cooler Master Aio Masterliquid Ml240l V2 Argb 240mm','Cooler- Marca: Ditron - Linea: Fan Led 8 - Modelos: FANLED8','Altura x Ancho x Largo: 418mm x 210mm x 480mm',12,1,17400,0,'/img/products/cooler-master-1.webp'),(6,'Fan Led Cooler 80 X 80 Colores Rgb 4 Pines Cpu 80mm Ditron','Cooler- Marca: Cooler Master - Linea: MasterAir - Modelos: MAM-T4PN-218PC-R1','Altura x Ancho x Largo: 111.8 x 130.9 x 165.1 mm',12,2,500,3,'/img/products/fan-led-cooler-2.webp'),(7,'Motherboard Asus B250 Mining Expert - 19 Slots Mineria','Motherboard- Marca: Asus - Linea: Prime - Modelos: B250M-A','Tamaño 28cm x 24.4cm\"',6,1,120000,0,'/img/products/mother-gigabytes-2.webp'),(8,'Motherboard Gigabyte B500 Aorus Elite V2am4 Ryzen Ddr5 Pcreg','Motherboard- Marca: Asus - Linea: Prime - Modelos: B250M-A','TamaÃƒÂ±o 28cm x 24.4cm',6,2,140000,5,'/img/products/mother-asus-1.webp'),(9,'Gabinete Exo K7 ',' Gabinete - Marca Exo  Linea:  K7  Modelos: Air43XL','35 x 45 x 15 cm',10,2,12500,5,'/img/products/1646158498717_img.jpg'),(10,'GABINETE THERMALTAKE S300 TG SNOW','gabinete Mid-Tower S300 TG - Admite placas base hasta ATX -ventilador estándar de 120 mm','AL X AN X PR: 493 x 230 x 508 mm',10,1,11290,4,'/img/products/gabinategamervidrio-2.webp'),(11,'ASUS-ROG-STRIX-B550-F-GAMING-WI-FI-6','La ROG Strix B550-F Gaming (Wi-Fi) soporta PCIeÃ‚Â® 4.0 y cuenta con las tecnologÃƒÂ­as mÃƒÂ¡s avanzadas de redes y transferencias de archivos mÃƒÂ¡s rÃƒÂ¡pidas','30.5 cm x 24.4 cm',6,1,105000,10,'/img/products/1646158044385_img.jpg'),(12,'Gabinete Cooler Master H500','Gabinete Cooler Master H500','3000X200X100 mm',10,1,9500,5,'/img/products/1646158193475_img.jpg'),(13,'Gabinete Exo K7','Gabinete Exo K7','35 x 45 x 15 cm',10,2,12500,5,'/img/products/1646158498717_img.jpg'),(14,'Cooler Corsair A50','Cooler Corsair A50','125x125x22 cm',12,2,6499,2,'/img/products/1646158616456_img.jpg'),(15,'Disco SSD Samsung EVO 860','Disco SSD Samsung EVO 860','125x125x22 cm',7,1,10500,15,'/img/products/1646159012917_img.jpg'),(16,'Disco SSD WD Nand 3D','Disco SSD WD Nand 3D','30.5 cm x 24.4 cm',7,2,8499,8,'/img/products/1646159058184_img.jpg'),(17,'Pc Desktop I5-10400 16gb 1tb Hdd Freedos Tecnobrand',' Especificaciones Técnicas: Almacenamiento:1t hdd barracuda seagate - Color del gabinete:Negro - Dimensiones del chasis:356 X 102 X 338 Mm - Fuente:De 350W - Gabinete:TECNOBRAND SFF S505 - Garantia:1 año - Memoria RAM:16G KINGSTON 2666 DDR4 - Mother:Gigabyte gih410m h v2 - Procesador:MICRO INTEL CORE I5 10400 10th generacion - Puertos:2 X Usb2.0 + 2 X Usb3.0 + Hd Audio - Sistema:Sin sistema operativo',' -',1,1,88000,3,'/img/products/D_NQ_NP_756276-MLA49107462452_022022-O.webp'),(18,'Gabinete Gamer','Gabinete RGB Doble Cooler 15mm','100',10,1,12000,5,'/img/products/Gabinete RGB.jpg'),(19,'GABINETE THERMALTAKE S300 TG SNOW','El gabinete Mid-Tower S300 TG viene con un panel de vidrio templado a la izquierda, un ventilador estÃ¡ndar de 120 mm preinstalado en la parte trasera, que admite placas base hasta ATX.','DIMENSIÃ“NES (AL X AN X PR) 493 x 230 x 508 mm',10,1,11290,5,'/img/products/1605371246_s300_1_s.jpg'),(20,'GABINETE THERMALTAKE V250 TG ARGB','Thermaltake V250 TG ARGB es un chasis de media torre que viene con tres ventiladores frontales ARGB de 120 mm preinstalados, un ventilador trasero estÃ¡ndar de 120 mm preinstalado y puede admitir hasta una placa base ATX estÃ¡ndar.','Dimensiones (AL X AN X PR) 430 x 216,5 x 477 mm(16,9 x 8,52 x 18,78 pulgadas)',10,1,17528,5,'/img/products/1597242715_v250tgargb_01.jpg'),(21,'GABINETE COOLER MASTER MASTERBOX Q300L','El panel de E / S se puede ajustar a seis ubicaciones diferentes. En ambos lados del cuerpo puede instalar el panel de E / S en la parte frontal, superior o inferior. Muestra tu construcciÃ³n a travÃ©s del panel lateral transparente de tamaÃ±o completo.','Dimensiones (AL X AN X PR) 450 x 200,5 x 477 mm(16 x 8 x 19, pulgadas)',10,2,15000,5,'/img/products/1559335077_jo.jpg'),(22,'Pc Gamer Amd A6 7480 4ghz X6 8gb Ram Ssd240 Hdmi Radeon R5','Computadora armada: MICRO: AMD QUAD CORE x 4 Núcleos-VIDEO: AMD GRAPHICS Radeon r4 (ONBOARD)-MOTHER: BIOSTAR E5600 HDMI VGA USB 3.1-DISCO RIGIDO: ESTADO SOLIDO SSD 240GB SATA3-MEMORIA RAM: 8GB 2666MHZ DDR4-GABINETE: ATX SENTEY G18 POWER KIT FUENTE 500W-KIT SENTEY: TECLADO USB, MOUSE USB Y PARLANTES POTENCIADOS-SISTEMA OPERATIVO: WINDOWS 10 64bits TRIA',' -',3,1,99999,0,'/img/products/D_NQ_NP_2X_658643-MLA31115500498_062019-F.webp'),(23,'MICROPROCESADOR INTEL CORE I7 11700F ROCKET LAKE 8/16 4.90GHZ 16MB LGA1200','*Chequear compatibilidad con motherboards antes de adquirir *','Dimensiones de la caja (total) 230 x 502 x 468 mm (W x H x D)',5,2,51999,2,'/img/products/i711gen.jpg'),(24,'MICROPROCESADOR AMD RYZEN 5600G 4.4 GHZ AM4','*Chequear compatibilidad con motherboards antes de adquirir *','Dimensiones de la caja (total) 230 x 502 x 468 mm (W x H x D)',5,1,40000,5,'/img/products/1638466775_sdfdgfeshsd.jpg'),(25,'GABINETE AEROCOOL CRONUS G BK1','Modelo Cronus-G-BK-v1','Dimensiones de la caja (total) 230 x 502 x 468 mm (W x H x D)',10,1,14999,5,'/img/products/1638277979_sdefgsdfg.png'),(26,'MICROPROCESADOR AMD RYZEN 9 5900X 12/24 4.8GHZ S/G S/C ZEN3','*Este procesador no cuenta con graficos integrados*','4cm',5,1,81889,5,'/img/products/1609790688_microprocesadoramdryzen95900x.jpg'),(27,'MOTHERBOARD GIGABYTE Z690 UD AX DDR4 S1700 12VA GEN','ZÃ³calo LGA1700: compatible con procesadores IntelÂ® Core â„¢ i9 de 12.a generaciÃ³n / procesadores IntelÂ® Core â„¢ i7 / procesadores IntelÂ® Core â„¢ i5 La cachÃ© L3 varÃ­a con la CPU','15cm',6,1,39899,5,'/img/products/1640273485_1000.png'),(28,'MOTHERBOARD GIGABYTE Z590 AORUS PRO AX S1200','La placa base Z590 AORUS PRO AX viene con una soluciÃ³n de energÃ­a mejorada, todo el diseÃ±o PCIe 4.0 y una conectividad sobresaliente para elevar su experiencia de juego al siguiente nivel.','13,5cm',6,2,65624,5,'/img/products/1624557226_1.png'),(29,'MOTHERBOARD MSI MPG Z690 CARBON WIFI DDR4 S1700 12VA GEN','La placa mas piola de todas','15cm',6,1,80712,5,'/img/products/1638191709_product_1635821336914035fd7f1b9efaca45ab50d3379d78.png'),(30,'PLACA DE VIDEO MSI NVIDIA GEFORCE RTX 3060TI GAMING X DUAL LHR','Nombre del modelo GeForce RTX â„¢ 3060 Ti GAMING X 8G LHR','15cm',9,1,218749,5,'/img/products/1632938321_placa-de-video-msi-nvidia-geforce-rtx-3060ti-gaming-x-dual-lhr.jpg'),(31,'PLACA DE VIDEO SAPPHIRE AMD RADEON RX 6700 XT PULSE 12GB GDDR6','La tarjeta grafica SAPPHIRE PULSE AMD Radeon â„¢ RX 6700 XT funciona con la poderosa tecnologÃ­a de enfriamiento Dual-X junto con el control inteligente del ventilador para mantener bajas las temperaturas y el ruido del ventilador bajo. El diseÃ±o refinado de la PCB ofrece un rendimiento estable, confiable y constante, que reduce de manera eficiente la temperatura de la PCB y el ruido de la seÃ±al de los componentes.','12cm',9,1,237499,5,'/img/products/1629386364_11306_05_rx6700xt_pulse_12gbgddr6_3dp_hdmi_lbc_02.jpg'),(32,'PLACA DE VIDEO PALIT NVIDIA GEFORCE RTX 3070 TI GAMEROCK 8GB GDDR6 LHR','Mas RGB mas fps siempre','15cm',9,2,274999,5,'/img/products/1628607955_placa-de-video-palit-nvidia-geforce-rtx-3070-ti-gamerock-8gb-gddr6-lhr.jpg'),(33,'DISCO SOLIDO SSD 120GB ADATA SATA III SU650','La unidad de estado sÃ³lido Ultimate SU650 implementa Flash NAND 3D y un controlador de alta velocidad. Ofrece un rendimiento de lectura/escritura alta y mayor fiabilidad que los SSD con NAND 2D. El SU650 cuenta con cachÃ© SLC y tecnologÃ­as avanzadas de correcciÃ³n de errores para garantizar un rendimiento e integridad de datos optimizados. Para aquellos que quieren experimentar una mejora clara de su PC, el SU650 definitivamente es una excelente opciÃ³n con una gran relaciÃ³n costo-rendimiento.','Dimensiones (L x An x Al) 100,45 x 69,85 x 7mm',7,1,3837,5,'/img/products/1576699630_asu650ss120gtr.jpg'),(34,'DISCO DE ESTADO SOLIDO SSD 240GB PNY SATA III CS900','PNY CS900 es la soluciÃ³n ideal para la actualizaciÃ³n de una unidad de estado sÃ³lido (SSD) convencional desde una unidad de disco duro (HDD). El CS900 ofrece todas las funciones mÃ¡s buscadas a un precio excelente y estÃ¡ diseÃ±ado para un reemplazo de disco duro fÃ¡cil y rentable en el sistema de PC para ayudar a lograr tiempos de arranque mÃ¡s rÃ¡pidos, inicios de aplicaciones mÃ¡s rÃ¡pidos y un mejor rendimiento general del sistema. Sin partes mÃ³viles, PNY CS900 es muy duradero y tiene menos probabilidades de fallar.','Altura 7 mm',7,1,5887,5,'/img/products/1617716757_1-pny-ssd-cs900-fr.png'),(35,'DISCO DE ESTADO SOLIDO SSD 256GB GIGABYTE M2 NVME 1700MB/S','Los SSD de GIGABYTE poseen una alta velocidad de transferencia de datos y una mayor resistencia, lo que proporciona un MTBF * duradero de 1,5 millones de horas y 3 aÃ±os o 200 TBW','Altura 7 mm',7,1,6874,5,'/img/products/1624020054_1000.png'),(36,'MEMORIA RAM DDR4 8GB 3200MHZ ADATA XPG SPECTRIX D60G RGB',' MÃ¡s RGB por mm2','8gb',8,1,7699,10,'/img/products/1594237851_productgallery38.png'),(37,'MEMORIA RAM DDR4 16GB 3600MHZ PATRIOT VIPER RGB CL18 2X8',' Los mÃ³dulos de memoria de la serie Viper RGB de Patriot fueron diseÃ±ados y fabricados para un rendimiento extremo. Tienen total compatibilidad con las Ãºltimas plataformas Intel y AMD para brindar una conexiÃ³n perfecta a su construcciÃ³n. La serie Viper RGB proporciona el mejor rendimiento y estabilidad, asÃ­ como las dimensiones mÃ¡s coloridas que vienen con la iluminaciÃ³n RGB. Incluye cinco zonas de iluminaciÃ³n diferentes, todas completamente personalizables a travÃ©s de nuestro propio software Viper RGB.','8gb',8,2,19237,10,'/img/products/1607616848_viper8gbrgb.png'),(38,'MEMORIA RAM DDR4 16GB 3200MHZ ADATA XPG SPECTRIX D50G RGB 2X8','Fabricado solo con los chips y placas de circuito impreso de la mÃ¡s alta calidad, su D50 proporciona la mÃ¡xima estabilidad y confiabilidad y velocidades de hasta 4133 MHz. AdemÃ¡s, es compatible con las plataformas Intel y AMD mÃ¡s recientes.','8GB x 2',8,1,13739,10,'/img/products/1599582694_1598533339_productgallery215.png'),(39,'FUENTE THERMALTAKE SMART WHITE 500W 80 PLUS','Fabricado solo con los chips y placas de circuito impreso de la mÃ¡s alta calidad, su D50 proporciona la mÃ¡xima estabilidad y confiabilidad y velocidades de hasta 4133 MHz. AdemÃ¡s, es compatible con las plataformas Intel y AMD mÃ¡s recientes.','86 mm x 150 mm x 140 mm',11,2,6590,10,'/img/products/1585762848_fuente_thermaltake_smart_white_500w_80.jpg'),(40,'FUENTE COOLER MASTER ELITE V4 600W 80+ WHITE','La unidad de fuente de alimentaciÃ³n de la serie Elite - v4 es una opciÃ³n confiable para los constructores de PC de nivel bÃ¡sico y los sistemas de trabajo de oficina. El ventilador silencioso de 120 mm, la eficiencia 80 PLUS White EU 230V. Una fuente de alimentaciÃ³n que brinda funcionalidad y resistencia en las que puede confiar.','86 mm x 150 mm x 140 mm',11,1,9249,20,'/img/products/1622228414_d_nq_np_776707-mla44506927605_012021-o.jpg'),(41,'FUENTE CORSAIR 550W CV550 80+ BRONCE','Las fuentes de alimentación CX Seriesâ„¢ Modular ofrecen una excelente alternativa para ensamblajes de sistemas bÃ¡sicos y actualizaciones de ordenadores de sobremesa, al proporcionar una gran fiabilidad, bajo nivel de ruido y flexibilidad del cableado modular.','Dimensiones 150 mm x 86 mm x 140 mm',11,1,8490,20,'/img/products/1585767726_fuente_corsair_550w_cv550_80_bronce.jpg'),(42,'FAN COOLER CPU THERMALTAKE UX100 ARGB','El disipador para CPU Thermaltake UX100 ARGB Lighting cuenta con 9 aspas de flujo de aire, cojinete hidrÃ¡ulico y 16,8 millones de colores de 15 LEDs ARGB, estÃ¡ listo para sincronizarse con placas base de 5V RGB de ASUS, ASRock, GIGABYTE y MSI. Se puede cambiar el efecto de iluminaciÃ³n fÃ¡cilmente, para obtener la mejor experiencia de juego.','DIMENSIÃ“N DEL VENTILADOR 120 x 120 x 25 mm (largo x ancho x alto)',12,1,3990,0,'/img/products/1639567772_sdghfsdgfdfsg.jpg'),(43,'WATER COOLER MSI CORELIQUID 360R MAG','El MAG CORELIQUID reciÃ©n presentado tiene todo lo que estÃ¡ buscando en un enfriador de lÃ­quido, desde materiales de calidad que brindan durabilidad confiable hasta tecnologÃ­as de disipaciÃ³n de calor que son extremadamente efectivas. Los usuarios pueden incluso disfrutar de ventajas como la iluminaciÃ³n ARGB y un cabezal giratorio de 270 grados que es fÃ¡cil de usar. AdemÃ¡s de eso, el blockhead cuenta con una estÃ©tica irregular Ãºnica que es elegante y artÃ­stica. Cada uno de los componentes del MAG CORELIQUID estÃ¡ diseÃ±ado con el objetivo final en mente: proporcionar un enfriamiento efectivo sin ningÃºn compromiso.','Dimensiones del ventilador 120 x 120 x 25 mm / 4.7 x 4.7 x 0.98 pulgadas',12,2,24490,9,'/img/products/1603556612_product_1_20200514170522_5ebd09d2f25f4.png'),(44,'Pc Armada Gamer Amd A6-7480 3.8ghz Ssd 120g 4gb Win 10 64','MICRO PComputadora armada: ROCESADOR: AMD A6 - 7480 3.9Ghz 2 Nucleos - VIDEO: Radeon HD7480 Series (integrada) - MOTHER: ASROCK FM2A68M-DG3+ VGA / DVI USB 3.0 - DISCO RIGIDO: NO LLEVA HD 1TB - DISCO ESTADO SOLIDO: SSD 120GB SATA3 - MEMORIA RAM: ADATA 4Gb 1600Mhz Ddr3 - GABINETE: SENTEY G18 KIT Teclado, Mouse y Parlantes - Fuente Bcp500w - SISTEMA OPERATIVO: WINDOWS 10 64 TRIAL',' -',3,2,117000,3,'/img/products/D_NQ_NP_660647-MLA31060152923_062019-O.webp'),(45,'Pc Computadora Gamer Intel I3 10100 8gb Ssd 240gb','Computadora armada: Gabinete con Fuente: Kit MAGNUMTECH con fuente de 550W, Incluye Teclado, Mouse y ParlanteS - Microprocesador: Intel Core i3 10100 - Motherboard: Gigabyte H410M-S2H c/HDMI y VGA- Memoria: DDR4 8GB 2666MHZ Kingston Fury Beast- Disco: Solido SSD 240Gb Kingston - Sistema Operativo: Windows 10 64bits Trial - NO INCLUYE: PERIFERICOS, MONITOR, NI DVD, NI KIT',' -',3,1,77000,3,'/img/products/D_NQ_NP_866976-MLA48877419628_012022-O.webp'),(46,'Pc Armada Intel Core I5-10400 10gen 8gb 240gb Win 10 Haedo','Computadora armada: MICROPROCESADOR INTEL CORE I5-10400 4.3GHZ 12MB VIDEO UDH630. MOTHERBOARD ASUS H410M-E HDMI/VGA/RED 1GB LAN/COM/M.2. MEMORIA RAM DDR4 8GB 2666MHZ CRUCIAL. DISCO RIGIDO SSD 240GB GIGABYTE SATA3 6GB/S. GABINETE BRB CON 2 USB FRONTAL + ENTRADAS MIC Y AUDIO. FUENTE 550W. WINDOWS 10 PRO TRIAL.',' -',1,1,69000,3,'/img/products/D_NQ_NP_898754-MLA31604674957_072019-O.webp'),(47,'Notebook Lenovo IdeaPad 14IIL05 platinum gray 14\", Intel Core i5 1035G1 8GB de RAM 512GB SSD, Gráficos Intel UHD G1 1920x1080px Windows 10 Home','Procesador Intel Core i5. Memoria RAM de 8GB. Pantalla LCD de 14\". Resolución de 1920x1080 px. Es antirreflejo. Placa de video Gráficos Intel UHD G1. Conexión wifi y bluetooth. Cuenta con 3 puertos USB y puerto HDMI. Incluye lector de tarjeta de memoria. Modo de sonido Dolby Audio, Stereo.','Ancho 327.1 mm - Profundidad 241 mm - Altura 19.9 mm - Peso: 1.6 kg',2,2,90000,2,'/img/products/D_NQ_NP_879170-MLA45629747467_042021-O.webp');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `typeproduct`
--

DROP TABLE IF EXISTS `typeproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `typeproduct` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `typeproduct`
--

LOCK TABLES `typeproduct` WRITE;
/*!40000 ALTER TABLE `typeproduct` DISABLE KEYS */;
INSERT INTO `typeproduct` VALUES (1,'visited'),(2,'offer'),(3,'likes');
/*!40000 ALTER TABLE `typeproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` text NOT NULL,
  `password` varchar(300) NOT NULL,
  `idCategory` int(11) NOT NULL,
  `avatarIMG` text DEFAULT NULL,
  `phone` text DEFAULT NULL,
  `adress` text DEFAULT NULL,
  `location` text DEFAULT NULL,
  `state` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `users_FK` (`idCategory`),
  CONSTRAINT `users_FK` FOREIGN KEY (`idCategory`) REFERENCES `categories_users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ignacio','Garcia','nicogarcia98n1n321@gmail.com','$2a$10$IfQSeeIH00z76zqisSTfkigkAdpcCRklTnVOa.cFQGFJfLVqh8kEW',1,'/img/users/236112312_img.jpg','48569872','La corbera 367','Rawson','Argentina'),(5,'Luana','Molaccia','luanmona@gmail.com','$2a$10$IfQSeeIH00z76zqiTxE74igkAdpcCRklTnVOa.cFQGFJfLVqh8kEW',1,'/img/users/234234w456_img.jpg','48569872','O Brien 65','Punta del Este','Uruguay'),(14,'Luca','Locatti','llocaty@yahoo.com','$2a$10$IfQSeeIM10z3dfgoisSffkegDrdpcCRkKZnVOa.cFQGFJfLVqh8kEW',1,'/img/users/1646956715996_img.webp','2342342','craba 234','montevideo','Uruguay'),(15,'lorenzo','logan','lologan@dartools.com','$2a$10$dsfsdf335%grrg$f434tf555w,4345,fewew3234f4f34f4',1,'/img/users/2342367878089_img.jpg','48569872','Corrientes 3423','San Luis','Argentina'),(17,'Adrian','Sergio','as@yahoo.com','$2a$10$IfTp08dmif4z3oisSffkegkABpcCRkKZnVOa.cFQGFJfLVqh8kEW',1,'/img/users/188452344364_img.jpg','123445567','lacalle 1234','San ISidoro','Argentina'),(18,'Thiago','Nicola','thnicola@yahoo.com','$2a$10$4z67HJ5uVs/n.7JGlDLc..9CX170zkN4GIMqLgcKLb74lhLZFl3ai',2,'/img/users/17823434456_img.jpg','123445567','laesquina 395','San ISidoro','Argentina'),(19,'Paula','Abadet','pabadet@dartools.com','$2a$10$xVU.PiRtT5kHgEoVDA19O.9NulHeqmdW9wrfuYuoFCb/xS3LXAEt.',1,'/img/users/27852119456_img.jpg','234232','La sierra 323','Santa Maria','Chile'),(20,'Macarena','Roma','macaroma@gyahoo.com','$2a$10$8NWeiXD.BtkNlOT9saGkqeV0n/BQchibsFybkZLh2gsQX2MXDoaIK',1,'/img/users/1134234w456_img.jpg','56456456','Corrientes 5423','Caba','Argentina'),(21,'Adrian','de Ines','asdic1800@yahoo.com.ar','$2a$10$w.cpc3Z8eTOHfQ2/AyvcgO.MXLaXfb3REfEfIXz9LoXWpY4MNjhgi',2,'/img/users/1647084770042_img.jpg','0111533160800','Pichincha 1400','Villa Adelina','Buenos Aires'),(22,'Sergio','Asdi','sergio@adfg.com','$2a$10$23wPZEVc3O9Q9eFZIDzd7.8jvRW84ic8ZRU6rZ/PFnx7.sQIRt8hK',1,'/img/users/1647112057607_img.jpg','435345342','Ludete 3457','Jose Leon Suarez','Buenos Aires'),(23,'Nicolas','Miño','nico89221@hotmail.com','$2a$10$IfQSeeIN00z3pzoisSffkegkAdpcCRkKZnVOa.cFQGFJfLVqh8kEW',1,'/img/users/1642956905384_img.jpg','48569870','Juarezx 1234','San Martin','Buenos Aires'),(24,'Marina','Blue','mblue@gmail.com','$2a$10$xpx.PiRt85kHg1oVurT.19O.9NulHeqmdW9wrfuYuoFCb/xS3LXAEt.',1,'/img/users/12323435_img.jpg','0134835899544','Camino 12','Mar del Plata','Buenos Aires-Argentina');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'qmc'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-15 11:18:13
