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

-- Copiando estrutura para tabela vr_software.curso_aluno
CREATE TABLE IF NOT EXISTS `curso_aluno` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `codigo_aluno` int(11) DEFAULT NULL,
  `codigo_curso` int(11) DEFAULT NULL,
  PRIMARY KEY (`codigo`),
  KEY `FK_curso_aluno_aluno` (`codigo_aluno`),
  KEY `FK_curso_aluno_curso` (`codigo_curso`),
  CONSTRAINT `FK_curso_aluno_aluno` FOREIGN KEY (`codigo_aluno`) REFERENCES `aluno` (`codigo`),
  CONSTRAINT `FK_curso_aluno_curso` FOREIGN KEY (`codigo_curso`) REFERENCES `curso` (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COMMENT='Tabela que iá conter os cursos que o aluno está matriculado';

-- Copiando dados para a tabela vr_software.curso_aluno: ~0 rows (aproximadamente)
DELETE FROM `curso_aluno`;
/*!40000 ALTER TABLE `curso_aluno` DISABLE KEYS */;
INSERT INTO `curso_aluno` (`codigo`, `codigo_aluno`, `codigo_curso`) VALUES
	(1, 1, 2),
	(2, 3, 5);
/*!40000 ALTER TABLE `curso_aluno` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
