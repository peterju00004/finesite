import ProjectDisplay from '../../../../../components/project-display/project-display';
import styles from './artist-statement.module.scss';

export function ArtistStatement() {
    return (
        <ProjectDisplay title='Artist Statement'>
            <div slot='subsection'>
                <span slot='title'>The Work</span>
                <p>
                    The project consists of four interconnected planetary narratives: Ruby Moon, Perilune, the Planet that Does Not Exist, and Christmas Planet. Each planet is accompanied by an original soundtrack and presented through an interactive web interface featuring custom pixel art. The writing style deliberately refers to traditional field guide conventions, blending scientific objectivity with philosophical playfulness and emotional resonance.
                </p>
            </div>
            <div slot='subsection'>
                <span slot='title'>Process & Collaboration</span>
                <p>
                    The writing happened through structured turn-taking with an AI collaborator. I established each planet's conceptual framework and wrote opening paragraphs that set tone and direction. The AI then expanded on descriptive elements (visual details, physical phenomena, etc.). This division of work shows the dynamic between us two: while the AI is great at elaboration and sensory descriptions, narrative momentum and development required human intervention. My role became to determine when to advance, when to conclude, when to resist the AI's tendency toward explanation over progression.
                </p>
                <br /><br />
                <p>
                    The polishing phase that came after the writing raised interesting questions about authorship and style. When asked to refine the complete collection, the AI made relatively minimal changes, perhaps due to the work's length and fragmentation. Its edits in general concentrated on my contributions rather than its own, sometimes changing my phrasing toward its preferred ones (e.g., the extensive use of dashes). Yet it successfully maintained the unconventional voice I'd established, the casual asides, the humor, the philosophical tangents that distinguish these pieces from a conventional speculative fiction. I then conducted my own final revision, delivering creative control over voice, pacing, and thematic cohesion.
                </p>
                <br /><br />
                <p>
                    The multimedia expansion happens organically from this foundation. The completed narratives inspired me to compose four original soundtracks for each planet and to create accompanying pixel art. This wasn't set in stone in the initial project scope but rather a creative response to the world the writing had built. The music and visuals became my way of deepening and interpreting the fictional universe, extending the collaboration beyond text into a fully realized multimedia experience.
                </p>
            </div>
            <div slot='subsection'>
                <span slot='title'>Significance</span>
                <p>
                    This project shows what J.C.R. Licklider called "man-computer symbiosis," which is a creative partnership where the combined output exceeds what either participant could achieve independently. The AI's contribution isn't only assistive. It fundamentally shaped what the work became with its descriptive richness and how it captures each planet's gist, which creates a textural depth I wouldn't have achieved writing alone, and wouldn't have achieved as efficiently even if I could.
                </p>
                <br /><br />
                <p>
                    Conversely, without human intervention, these would be beautifully descriptive but narratively inert pieces. The AI couldn't determine when enough was enough, or when to embrace absurdity over explanation. Moreover, the worldbuilding settings are distinct enough that the AI either couldn't think of on its own, or couldn't consistently maintain coherence across them without my guidance. This dynamic showcases both the strengths and limitations of AI as a creative partner, and the necessity of human judgment, intentionality, and thematic vision in producing meaningful art.
                </p>
                <br /><br />
                <p>
                    The non-traditional creative process itself matters as well. This isn't traditional writing with computational assistance but a new mode of authorship where turn-taking, negotiation, and iterative refinement between human and machine intelligence produce work that belongs to neither individually. The AI wrote sentences that appear in the final text unchanged. I wrote sentences that appear unchanged. Many paragraphs are genuinely co-written, where my direction and the AI's execution became inseparable from another.
                </p>
                <br /><br />
                <p>
                    What makes this significant isn't just that AI can help write fiction. This collaboration revealed specific creative affordances. The AI excels at sustained descriptive aspects. Humans excel at narrative architecture and emotional resonance. Together, we created planetary narratives with both rigorous internal logic <i>and</i> enough playfulness and fun. Furthermore, the multimedia expansion demonstrates how human-AI collaboration in one medium can catalyze entirely human creative work in others, creating a cascading effect where computational partnership enhances broader artistic expression.
                </p>
            </div>
            <div slot='subsection'>
                <span slot='title'>Looking Forward</span>
                <p>
                    <i>Planets that Revolve around the Ruby Moon</i> positions itself at the intersection of questions: how do we design experiences that utilize computational tools while maintaining human creative agency? What does collaboration look like when one collaborator is an algorithm? How can we use technology to tell stories that couldn't exist otherwise? The project provides an answer through practice rather than theory by actually building a situation where human intuition and machine capability combine to create something neither could produce alone.
                </p>
            </div>
        </ProjectDisplay>
    );
}

export default ArtistStatement;
