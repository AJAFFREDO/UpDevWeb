const quizData = {
    lessonTitle: "Introduction à HTML",
    questions: [
        {
            question: "Que signifie l'acronyme HTML ?",
            answers: [
                { text: "Hyper Text Markup Language", correct: true },
                { text: "Hyperlinks and Text Markup Language", correct: false },
                { text: "Home Tool Markup Language", correct: false },
                { text: "Hyper Tool Multi Language", correct: false }
            ],
            explanation: "HTML signifie Hyper Text Markup Language. C'est le langage standard pour créer des pages web."
        },
        {
            question: "Quelle balise est utilisée pour définir un paragraphe ?",
            answers: [
                { text: "&lt;para&gt;", correct: false },
                { text: "&lt;paragraph&gt;", correct: false },
                { text: "&lt;p&gt;", correct: true },
                { text: "&lt;pg&gt;", correct: false }
            ],
            explanation: "La balise &lt;p&gt; est la balise HTML standard pour définir un paragraphe."
        },
        {
            question: "Quelle balise contient le contenu principal visible d'une page web ?",
            answers: [
                { text: "&lt;head&gt;", correct: false },
                { text: "&lt;main&gt;", correct: true },
                { text: "&lt;body&gt;", correct: false },
                { text: "&lt;content&gt;", correct: false }
            ],
            explanation: "La balise &lt;main&gt; contient le contenu principal unique de la page, tandis que &lt;body&gt; contient tout le contenu visible."
        },
        {
            question: "Comment créer un lien vers https://example.com ?",
            answers: [
                { text: "&lt;a&gt;https://example.com&lt;/a&gt;", correct: false },
                { text: "&lt;a url='https://example.com'&gt;Lien&lt;/a&gt;", correct: false },
                { text: "&lt;a href='https://example.com'&gt;Lien&lt;/a&gt;", correct: true },
                { text: "&lt;link&gt;https://example.com&lt;/link&gt;", correct: false }
            ],
            explanation: "On utilise la balise &lt;a&gt; avec l'attribut href pour créer des liens hypertextes."
        },
        {
            question: "Quelle balise est obligatoire dans un document HTML5 ?",
            answers: [
                { text: "&lt;doctype&gt;", correct: false },
                { text: "&lt;html&gt;", correct: true },
                { text: "&lt;head&gt;", correct: false },
                { text: "&lt;title&gt;", correct: false }
            ],
            explanation: "La balise &lt;html&gt; est la racine du document et est obligatoire. &lt;!DOCTYPE html&gt; est aussi requis mais n'est pas une balise."
        },
        {
            question: "Comment ajouter un commentaire en HTML ?",
            answers: [
                { text: "&lt;!-- Ceci est un commentaire --&gt;", correct: true },
                { text: "// Ceci est un commentaire", correct: false },
                { text: "/* Ceci est un commentaire */", correct: false },
                { text: "&lt;comment&gt;Ceci est un commentaire&lt;/comment&gt;", correct: false }
            ],
            explanation: "Les commentaires HTML s'écrivent entre &lt;!-- et --&gt; et ne sont pas visibles dans le navigateur."
        },
        {
            question: "Quelle balise est utilisée pour une image ?",
            answers: [
                { text: "&lt;img&gt;", correct: true },
                { text: "&lt;image&gt;", correct: false },
                { text: "&lt;picture&gt;", correct: false },
                { text: "&lt;src&gt;", correct: false }
            ],
            explanation: "La balise &lt;img&gt; avec l'attribut src permet d'insérer une image. &lt;picture&gt; est utilisé pour des images responsives plus complexes."
        },
        {
            question: "Quelle structure HTML est correcte pour une liste non ordonnée ?",
            answers: [
                { text: "&lt;ul&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ul&gt;", correct: true },
                { text: "&lt;ol&gt;&lt;li&gt;Item&lt;/li&gt;&lt;/ol&gt;", correct: false },
                { text: "&lt;list&gt;&lt;item&gt;Item&lt;/item&gt;&lt;/list&gt;", correct: false },
                { text: "&lt;ul&gt;&lt;item&gt;Item&lt;/item&gt;&lt;/ul&gt;", correct: false }
            ],
            explanation: "&lt;ul&gt; crée une liste non ordonnée (à puces), avec des éléments &lt;li&gt; pour chaque item."
        },
        {
            question: "Quel attribut est essentiel pour les balises &lt;img&gt; ?",
            answers: [
                { text: "src", correct: true },
                { text: "link", correct: false },
                { text: "href", correct: false },
                { text: "url", correct: false }
            ],
            explanation: "L'attribut src (source) indique le chemin de l'image. L'attribut alt est aussi fortement recommandé pour l'accessibilité."
        },
        {
            question: "Quelle balise est utilisée pour le titre principal d'une page ?",
            answers: [
                { text: "&lt;h1&gt;", correct: true },
                { text: "&lt;head&gt;", correct: false },
                { text: "&lt;header&gt;", correct: false },
                { text: "&lt;title&gt;", correct: false }
            ],
            explanation: "&lt;h1&gt; représente le titre de plus haut niveau. &lt;title&gt; définit le titre de l'onglet du navigateur, pas le contenu de la page."
        }
    ]
};