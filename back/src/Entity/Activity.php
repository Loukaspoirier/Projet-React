<?php

namespace App\Entity;

use App\Repository\ActivityRepository;
use DateTime;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ActivityRepository::class)]
class Activity
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?DateTime $date = null;

    #[ORM\Column(type: Types::INTEGER)]
    private ?int $likes = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $question = null;

    #[ORM\Column(nullable: true)]
    private ?int $yes = null;

    #[ORM\Column(nullable: true)]
    private ?int $no = null;

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private ?array $listeLikes = null;

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private ?array $listeYes = null;

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private ?array $listeNo = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getDate(): DateTime
    {
        return $this->date;
    }

    public function setDate(DateTime $date): static
    {
        $this->date = $date;

        return $this;
    }


    /**
     * Get the value of like
     *
     * @return ?int
     */
    public function getLikes(): ?int
    {
        return $this->likes; 
    }

    /**
     * Set the value of like
     *
     * @param ?int $likes
     *
     * @return self
     */
    public function setLikes(?int $likes): self
    {
        $this->likes = $likes;

        return $this;
    }

    public function getQuestion(): ?string
    {
        return $this->question;
    }

    public function setQuestion(?string $question): static
    {
        $this->question = $question;

        return $this;
    }

    public function getYes(): ?int
    {
        return $this->yes;
    }

    public function setYes(?int $yes): static
    {
        $this->yes = $yes;

        return $this;
    }

    public function getNo(): ?int
    {
        return $this->no;
    }

    public function setNo(?int $no): static
    {
        $this->no = $no;

        return $this;
    }

    public function getListeLikes(): ?array
    {
        return $this->listeLikes;
    }

    public function setListeLikes(?array $listeLikes): static
    {
        $this->listeLikes = $listeLikes;

        return $this;
    }

    public function getListeYes(): ?array
    {
        return $this->listeYes;
    }

    public function setListeYes(?array $listeYes): static
    {
        $this->listeYes = $listeYes;

        return $this;
    }

    public function getListeNo(): ?array
    {
        return $this->listeNo;
    }

    public function setListeNo(?array $listeNo): static
    {
        $this->listeNo = $listeNo;

        return $this;
    }
}