-- --------------------------------------------------------
-- Servidor:                     localhost
-- Versão do servidor:           10.1.37-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win32
-- HeidiSQL Versão:              11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Copiando estrutura para tabela vr_software.curso
CREATE TABLE IF NOT EXISTS `curso` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(50) DEFAULT NULL,
  `ementa` text,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COMMENT='Tabela que contém as informações dos Cursos';

-- Copiando dados para a tabela vr_software.curso: ~4 rows (aproximadamente)
DELETE FROM `curso`;
/*!40000 ALTER TABLE `curso` DISABLE KEYS */;
INSERT INTO `curso` (`codigo`, `descricao`, `ementa`) VALUES
	(2, 'Avançando com PHP: Arrays, Strings, Função e Web', 'Entenda os Arrays e Arrays associativos,Crie funções para encapsular uma lógica,Domine os strings e conheça a interpolação,Escreva o seu primeiro código na Web *Saiba a diferença entre passagem por valor e eferência'),
	(3, 'Guia de estilos: Montando páginas com componentes', 'Entenda o processo de desenvolvimento de páginas web a partir de uma ferramenta de layout, como Figma,Aprenda a estruturar o projeto com arquitetura de CSS'),
	(4, 'JavaScript: Aprofundando em MVC', 'Una o paradigma orientado a objetos ao funcional para resolver problemas,Aplique novos recursos do ECMASCRIPT 6, Estruture sua aplicação no modelo MVC'),
	(5, 'JavaScript: Salvando dados localmente com IndexedD', 'Aprenda a armazenar dados offline com IndexedDB,Encante-se com a Fetch API');
/*!40000 ALTER TABLE `curso` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
