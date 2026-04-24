export type Certification = {
  title: string;
  issuer: string;
  instructor?: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
  score?: number;
  progression?: number;
  category?: string;
};

export const certifications: Certification[] = [
  {
    title: "Programmation orientée objet : C++",
    issuer: "MLIAEdu",
    instructor: "Mohamed LACHGAR",
    issueDate: "2026-04",
    credentialId: "#12-dd2cd9e3-a1f0-4581-b448-89e89c55a666-833132",
    skills: ["C++", "OOP", "Classes", "Héritage", "Polymorphisme"],
    tags: ["C++", "OOP"],
    image: "/certs/cpp-cert.webp",
    imageAlt: "Badge Certification C++ MLIAEdu",
    status: "active",
    score: 94,
    progression: 100,
    category: "PROGRAMMATION CPP",
  },
  {
    title: "Ingénierie Logicielle Web avec PHP 7 : Architecture Multicouche et Accès aux Données Sécurisé",
    issuer: "MLIAEdu",
    instructor: "Mohamed LACHGAR",
    issueDate: "2026-04",
    credentialId: " #44-dd2cd9e3-a1f0-4581-b448-89e89c55a666-939904",
    skills: ["PHP 7", "Architecture MVC", "PDO", "Sécurité Web", "Base de données", "Architecture Multicouche"],
    tags: ["Web", "PHP", "Architecture"],
    image: "/certs/php-cert.webp",
    imageAlt: "Badge Certification PHP 7 MLIAEdu",
    status: "active",
    score: 88,
    progression: 100,
    category: "PROGRAMMATION WEB",
  },
  {
    title: "Fondamentaux et Concepts Avancés de la Programmation Java",
    issuer: "MLIAEdu",
    instructor: "Mohamed LACHGAR",
    issueDate: "2026-04",
    credentialId: "#6-dd2cd9e3-a1f0-4581-b448-89e89c55a666-93043",
    skills: ["Java", "OOP", "Collections", "Exceptions", "Threads", "Interfaces"],
    tags: ["Java", "OOP"],
    image: "/certs/java-cert.webp",
    imageAlt: "Badge Certification Java MLIAEdu",
    status: "active",
    score: 89,
    progression: 100,
    category: "PROGRAMMATION JAVA",
  },
  {
    title: "Bases de données",
    issuer: "MLIAEdu",
    instructor: "Mohamed LACHGAR",
    issueDate: "2026-04",
    credentialId: "# #15-dd2cd9e3-a1f0-4581-b448-89e89c55a666-614132",
    skills: ["SQL", "MySQL", "Modélisation", "Schéma relationnel", "Contraintes d'intégrité"],
    tags: ["Base de données", "SQL", "MySQL"],
    image: "/certs/bdd-cert.webp",
    imageAlt: "Badge Certification Bases de données MLIAEdu",
    status: "active",
    score: 71,
    progression: 100,
    category: "BASES DE DONNEES",
  },
  {
    title: "Fondamentaux de la programmation en Kotlin",
    issuer: "MLIAEdu",
    instructor: "Mohamed LACHGAR",
    issueDate: "2026-02",
    credentialId: "#",
    skills: ["Kotlin", "Android", "Programmation Orientée Objet", "Coroutines"],
    tags: ["Mobile", "Kotlin", "Android"],
    image: "/certs/kotlin-cert.webp",
    imageAlt: "Badge Certification Kotlin MLIAEdu",
    status: "active",
    score: 84,
    progression: 100,
    category: "PROGRAMMATION MOBILE",
  },
];