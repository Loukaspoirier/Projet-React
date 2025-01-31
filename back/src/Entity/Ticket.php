<?php

namespace App\Entity;

use App\Repository\TicketRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: TicketRepository::class)]
class Ticket
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;
    #[ORM\Column]
    #[Assert\NotBlank()]
    private ?string $title = null;
    #[ORM\Column]
    #[Assert\NotBlank()]
    private ?string $content = null;
    #[ORM\Column]
    #[Assert\NotBlank()]
    private ?string $status = "KO";
    #[ORM\Column]
    #[Assert\NotBlank()]
    private ?string $email = null;

    #[ORM\OneToMany(targetEntity: MessageTicket::class, mappedBy: 'ticket')]
    private $messages;
    
    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $id): self
    {
        $this->id = $id;

        return $this;
    }
 
    public function getTitle(): ?string
    {
        return $this->title;
    }
 
    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }
 
    public function getContent(): ?string
    {
        return $this->content;
    }
  
    public function setContent(?string $content): self
    {
        $this->content = $content;

        return $this;
    }
    
    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(?string $status): self
    {
        $this->status = $status;

        return $this;
    }
    
    public function getEmail(): ?string
    {
        return $this->email;
    }
    
    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getMessages()
    {
        return $this->messages;
    }
    
    public function setMessages($messages)
    {
        $this->messages = $messages;

        return $this;
    }

    /* public function addMessageTicket(MessageTicket $message): self
    {
        if (!$this->messages->contains($message)) {
            $this->messages[] = $message;
            $message->addTicket($this);
        }

        return $this;
    }

    public function removeMessageTicket(MessageTicket $message): self
    {
        if ($this->messages->removeElement($message)) {
            $message->removeTicket($this);
        }

        return $this;
    } */

    public function addMessageTicket(MessageTicket $message): self
    {
        if (!$this->messages->contains($message)) {
            $this->messages[] = $message;
            $message->setTicket($this);
        }

        return $this;
    }

    public function removeMessageTicket(MessageTicket $message): self
    {
        if ($this->messages->removeElement($message)) {
            // set the owning side to null (unless already changed)
            if ($message->getTicket() === $this) {
                $message->setTicket(null);
            }
        }

        return $this;
    }

    
}
