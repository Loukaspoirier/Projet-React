<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240229140009 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE activity ADD liste_likes LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', ADD liste_yes LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', ADD liste_no LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\'');
        $this->addSql('ALTER TABLE event CHANGE date date DATETIME NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE activity DROP liste_likes, DROP liste_yes, DROP liste_no');
        $this->addSql('ALTER TABLE event CHANGE date date VARCHAR(255) NOT NULL');
    }
}
