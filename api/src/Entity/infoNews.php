<?php
namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Une InfoNews.
 *
 * @ORM\Entity
 */
#[ApiResource]
class InfoNews
{
    /**
     * id de l'InfoNews.
     *
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private ?int $idInfonews = null;

    /**
     * Pseudo de l'InfoNews (not null).
     *
     * @ORM\Column(nullable=false)
     */
    #[Assert\NotBlank]
    public ?string $description = '';
        
    /**
     * Date de Vadilité de l'InfoNews.
     *
     * @ORM\Column(type="datetime_immutable")
     */
    #[Assert\NotNull]
    public ?\DateTimeInterface $dateValidite = null;

    public function getId(): ?int
    {
        return  $this->idInfonews;
    }

}
