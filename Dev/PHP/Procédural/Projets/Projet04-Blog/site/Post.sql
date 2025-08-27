-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 11 Janvier 2019 à 11:06
-- Version du serveur :  5.7.24-0ubuntu0.16.04.1
-- Version de PHP :  7.0.32-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `blog`
--

-- --------------------------------------------------------

--
-- Structure de la table `Post`
--

CREATE TABLE `Post` (
  `post_id` int(11) NOT NULL,
  `post_title` varchar(100) NOT NULL,
  `post_contents` text NOT NULL,
  `post_dateCreation` datetime NOT NULL,
  `author_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Post`
--

INSERT INTO `Post` (`post_id`, `post_title`, `post_contents`, `post_dateCreation`, `author_id`, `category_id`) VALUES
(12, 'Test Upload', 'Test de modification depuis le blog', '2019-01-10 13:54:22', 1, 1),
(17, 'Excogitatum', 'Excogitatum est super his, ut homines quidam ignoti, vilitate ipsa parum cavendi ad colligendos rumores per Antiochiae latera cuncta destinarentur relaturi quae audirent. hi peragranter et dissimulanter honoratorum circulis adsistendo pervadendoque divites domus egentium habitu quicquid noscere poterant vel audire latenter intromissi per posticas in regiam nuntiabant, id observantes conspiratione concordi, ut fingerent quaedam et cognita duplicarent in peius, laudes vero supprimerent Caesaris, quas invitis conpluribus formido malorum inpendentium exprimebat.', '2019-01-10 16:14:41', 1, 1),
(18, 'Hanc regionem praestitutis ', 'Hanc regionem praestitutis celebritati diebus invadere parans dux ante edictus per solitudines Aboraeque amnis herbidas ripas, suorum indicio proditus, qui admissi flagitii metu exagitati ad praesidia descivere Romana. absque ullo egressus effectu deinde tabescebat immobilis.\r\n\r\nSoleo saepe ante oculos ponere, idque libenter crebris usurpare sermonibus, omnis nostrorum imperatorum, omnis exterarum gentium potentissimorumque populorum, omnis clarissimorum regum res gestas, cum tuis nec contentionum magnitudine nec numero proeliorum nec varietate regionum nec celeritate conficiendi nec dissimilitudine bellorum posse conferri; nec vero disiunctissimas terras citius passibus cuiusquam potuisse peragrari, quam tuis non dicam cursibus, sed victoriis lustratae sunt.', '2019-01-10 17:16:59', 1, 1),
(19, 'test faille XSS', '<script>\r\nfor(i=0;i<10;i++){\r\ndocument.write(\'que la night\');\r\n}\r\n</script>', '2019-01-10 17:26:04', 1, 1),
(20, 'Lorem ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend scelerisque vestibulum. Maecenas at interdum ex. Proin consequat semper condimentum. Pellentesque dignissim ante eu condimentum porttitor. Morbi malesuada magna a libero convallis, id convallis diam lacinia. Fusce pharetra eget eros vitae ultricies. In eu dui erat. Morbi porttitor ante at sem aliquet pharetra. Proin et orci vel eros consequat dictum. Sed eget gravida nisi. Vestibulum pharetra sem eget est blandit, ac fermentum orci ultrices.\r\n\r\nQuisque augue leo, fringilla at bibendum id, tempor quis nibh. Suspendisse semper, justo sit amet consectetur sollicitudin, justo nibh mollis ipsum, eget fermentum elit ante quis libero. Sed venenatis risus elit, sit amet lacinia ligula vestibulum sit amet. Sed in nibh erat. Etiam consequat velit metus, at finibus nisl mollis eu. Pellentesque nec est eu mauris euismod elementum. Phasellus id lectus elit. Quisque congue nibh non mi tincidunt, non luctus arcu vehicula. Curabitur volutpat varius libero, dictum volutpat eros luctus non. Ut faucibus est quis tortor ultrices imperdiet. In ut elit sit amet urna posuere dignissim. Etiam hendrerit lorem tellus, nec venenatis orci finibus non. Mauris massa turpis, fringilla eu dui vel, imperdiet laoreet sem. Morbi viverra viverra turpis, non euismod erat vulputate id.\r\n\r\n', '2019-01-10 17:26:28', 1, 1);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Post`
--
ALTER TABLE `Post`
  ADD PRIMARY KEY (`post_id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Post`
--
ALTER TABLE `Post`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
