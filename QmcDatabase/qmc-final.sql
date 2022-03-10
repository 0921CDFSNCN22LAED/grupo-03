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
-- Table structure for table `carts_products`
--

DROP TABLE IF EXISTS `carts_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idProducts` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `carts_products_FK` (`idProducts`),
  CONSTRAINT `carts_products_FK` FOREIGN KEY (`idProducts`) REFERENCES `products` (`id`)
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
  `name` varchar(200) NOT NULL,
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
  `idCategoryUsers` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  PRIMARY KEY (`idCategoryUsers`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_users`
--

LOCK TABLES `categories_users` WRITE;
/*!40000 ALTER TABLE `categories_users` DISABLE KEYS */;
INSERT INTO `categories_users` VALUES (1,'admin');
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
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `size` char(100) NOT NULL,
  `idCategory` int(11) NOT NULL,
  `idType` int(12) NOT NULL,
  `price` mediumint(9) NOT NULL,
  `disc` mediumint(9) NOT NULL,
  `image` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_FK` (`idCategory`),
  KEY `products_FK_1` (`idType`),
  CONSTRAINT `products_FK` FOREIGN KEY (`idCategory`) REFERENCES `categories_prod` (`id`),
  CONSTRAINT `products_FK_1` FOREIGN KEY (`idType`) REFERENCES `typeproduct` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (8,'ASUS-ROG-STRIX-B550-F-GAMING-WI-FI-6','La ROG Strix B550-F Gaming (Wi-Fi) soporta PCIe® 4.0 y cuenta con las tecnologías más avanzadas de redes y transferencias de archivos más rápidas','30.5 cm x 24.4 cm',6,1,105000,10,'/img/products/1646158044385_img.jpg'),(9,'Gabinete Cooler Master H500','Gabinete Cooler Master H500','3000X200X100 mm',10,1,9500,5,'/img/products/1646158193475_img.jpg'),(14,'Gabinete Exo K7','Gabinete Exo K7','35 x 45 x 15 cm',10,2,12500,5,'/img/products/1646158498717_img.jpg'),(15,'Cooler Corsair A50','Cooler Corsair A50','125x125x22 cm',12,2,6499,2,'/img/products/1646158616456_img.jpg'),(16,'Disco SSD Samsung EVO 860','Disco SSD Samsung EVO 860','125x125x22 cm',7,1,10500,15,'/img/products/1646159012917_img.jpg'),(17,'Disco SSD WD Nand 3D','Disco SSD WD Nand 3D','30.5 cm x 24.4 cm',7,2,8499,8,'/img/products/1646159058184_img.jpg'),(19,'Iphone 15','Iphone 13-256gb','125x125x22 cm',1,1,105000,2,'/img/products/1646691313515_img.jpg'),(20,'Tv SAMSUNG 65\" 4K','LG OLED 55\"','3000X200X100 mm',5,2,105000,10,'/img/products/1646691388181_img.jpg');
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
  `phone` varchar(10) DEFAULT NULL,
  `adress` varchar(100) DEFAULT NULL,
  `location` varchar(20) DEFAULT NULL,
  `state` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `users_FK` (`idCategory`),
  CONSTRAINT `users_FK` FOREIGN KEY (`idCategory`) REFERENCES `categories_users` (`idCategoryUsers`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (21,'Matias','Miño','nico89221@hotmail.com','$2a$10$lq.KGngmUncl2qCPx.cKkeA8m/IcBQ/hgMKu.JtaIBOvPVj/aL/gW',1,'/img/users/1646350566937_img.jpg','48569870','Juarezx 1245','San Martin','Buenos Aires');
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

-- Dump completed on 2022-03-07 20:21:54
