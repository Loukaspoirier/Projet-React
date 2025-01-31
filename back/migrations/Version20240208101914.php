<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240208101914 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE love ADD activity_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE love ADD CONSTRAINT FK_5782501D81C06096 FOREIGN KEY (activity_id) REFERENCES activity (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_5782501D81C06096 ON love (activity_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE love DROP FOREIGN KEY FK_5782501D81C06096');
        $this->addSql('DROP INDEX UNIQ_5782501D81C06096 ON love');
        $this->addSql('ALTER TABLE love DROP activity_id');
    }
}
