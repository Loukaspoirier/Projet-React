<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240209142535 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE love (id INT AUTO_INCREMENT NOT NULL, activity_id INT DEFAULT NULL, number INT DEFAULT NULL, UNIQUE INDEX UNIQ_5782501D81C06096 (activity_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE love ADD CONSTRAINT FK_5782501D81C06096 FOREIGN KEY (activity_id) REFERENCES activity (id)');
        $this->addSql('ALTER TABLE activity ADD love_id INT DEFAULT NULL, DROP `like`');
        $this->addSql('ALTER TABLE activity ADD CONSTRAINT FK_AC74095ACBB24A1C FOREIGN KEY (love_id) REFERENCES love (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_AC74095ACBB24A1C ON activity (love_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE activity DROP FOREIGN KEY FK_AC74095ACBB24A1C');
        $this->addSql('ALTER TABLE love DROP FOREIGN KEY FK_5782501D81C06096');
        $this->addSql('DROP TABLE love');
        $this->addSql('DROP INDEX UNIQ_AC74095ACBB24A1C ON activity');
        $this->addSql('ALTER TABLE activity ADD `like` INT NOT NULL, DROP love_id');
    }
}
