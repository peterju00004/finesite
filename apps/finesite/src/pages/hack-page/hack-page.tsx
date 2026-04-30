import styles from './hack-page.module.scss';
import proposalPdf from './HackPGH Project Proposal.pdf';
import storyPlanPdf from './HackPGH Master Story Plan.pdf';
import infographicImage from './Infographics.png';
import visualEssay from './VisualEssay.pdf';
import podcast from './Podcast_mixdown_2.wav';
import facebook from './facebook.png';
import instagram from './instagram-1.png';
import linkedin from './linkedin.png';
import tiktok from './tiktok.png';
import twitter from './twitter:x.png';


export function HackPage() {
    const socialPosts = [
        { platform: 'Instagram', file: instagram },
        { platform: 'TikTok', file: tiktok },
        { platform: 'Facebook', file: facebook },
        { platform: 'LinkedIn', file: linkedin },
        { platform: 'X / Twitter', file: twitter },
    ];

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <p className={styles.heroEyebrow}>ENGCMP 0610 — Digital Storytelling Campaign</p>
                    <h1 className={styles.heroTitle}>Find Your Place.</h1>
                    <p className={styles.heroSubtitle}>
                        A digital storytelling campaign for HackPGH — Pittsburgh's first and oldest
                        volunteer-run makerspace, and one of the city's last genuinely open community spaces.
                    </p>
                    <a
                        href="https://www.hackpgh.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.heroLink}
                    >
                        Visit HackPGH →
                    </a>
                </div>
                <div className={styles.heroAccent} aria-hidden="true">
                    <span>03</span>
                    <span>PITTSBURGH</span>
                    <span>2009</span>
                </div>
            </section>

            <div className={styles.divider} />

            <section className={styles.section}>
                <div className={styles.sectionLabel}>THE CAMPAIGN</div>
                <div className={styles.aboutGrid}>
                    <div className={styles.aboutText}>
                        <h2 className={styles.sectionTitle}>The Third Place</h2>
                        <p>
                            In 2024, the American Psychiatric Association reported that 1 in 4 Americans felt
                            lonelier after the pandemic. Sociologist Ray Oldenburg called the spaces between
                            home and work "third places" — and they are disappearing.
                        </p>
                        <p>
                            HackPGH has been Pittsburgh's answer since 2009. This campaign tells that story
                            across ten interconnected components — each one a different entry point into the
                            same truth: there is a place here for you.
                        </p>
                    </div>
                    <div className={styles.aboutStats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>16</span>
                            <span className={styles.statLabel}>Years serving Pittsburgh</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>11</span>
                            <span className={styles.statLabel}>Shop areas available 24/7</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>100%</span>
                            <span className={styles.statLabel}>Volunteer-run</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles.divider} />

            <section className={styles.section}>
                <div className={styles.sectionLabel}>COMPONENT 01</div>
                <h2 className={styles.sectionTitle}>Campaign Proposal</h2>
                <p className={styles.sectionDesc}>
                    Research-based proposal identifying HackPGH's mission, target audiences,
                    communication challenges, and the Third Place narrative angle driving this campaign.
                </p>
                <div className={styles.pdfWrapper}>
                    <iframe
                        src={proposalPdf}
                        title="HackPGH Campaign Proposal"
                        className={styles.pdfEmbed}
                    />
                    <a
                        href={proposalPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.pdfButton}
                    >
                        Open PDF in New Tab →
                    </a>
                </div>
            </section>

            <div className={styles.divider} />

            <section className={styles.section}>
                <div className={styles.sectionLabel}>COMPONENT 02</div>
                <h2 className={styles.sectionTitle}>Visual Audit & Style Guide</h2>
                <p className={styles.sectionDesc}>
                    Typography, color palette, voice and tone guidelines, and asset usage rules
                    ensuring visual consistency across all campaign components.
                </p>
                <div className={styles.figmaWrapper}>
                    <div className={styles.figmaCard}>
                        <span className={styles.figmaIcon}>🎨</span>
                        <div className={styles.figmaText}>
                            <h3>Campaign Style Guide</h3>
                            <p>View the full visual audit and character designs on Figma</p>
                        </div>
                        <a
                            href="https://www.figma.com/board/7JqLC9opWUZm7quq04Vwpw/HackPGH-Moodboard?node-id=0-1&t=Hgf6kXUgSRKRO4NI-0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.figmaButton}
                        >
                            Open in Figma →
                        </a>
                    </div>
                </div>
            </section>

            <div className={styles.divider} />

            <section className={styles.section}>
                <div className={styles.sectionLabel}>COMPONENT 03</div>
                <h2 className={styles.sectionTitle}>Master Story Plan</h2>
                <p className={styles.sectionDesc}>
                    Comprehensive documentation of the campaign's narrative structure — mapping
                    how the Third Place story unfolds across all ten components.
                </p>
                <div className={styles.pdfWrapper}>
                    <iframe
                        src={storyPlanPdf}
                        title="HackPGH Master Story Plan"
                        className={styles.pdfEmbed}
                    />
                    <a
                        href={storyPlanPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.pdfButton}
                    >
                        Open PDF in New Tab →
                    </a>
                </div>
            </section>

            <div className={styles.divider} />

            <section className={styles.section}>
                <div className={styles.sectionLabel}>COMPONENT 04</div>
                <h2 className={styles.sectionTitle}>Infographic</h2>
                <p className={styles.sectionDesc}>
                    The data case for HackPGH's Third Place mission — loneliness statistics,
                    barriers to making, and sixteen years of community impact.
                </p>
                <div className={styles.infographicWrapper}>
                    <img
                        src={infographicImage}
                        alt="HackPGH Third Place Infographic"
                        className={styles.infographic}
                    />
                </div>
            </section>

            <div className={styles.divider} />

            <section className={styles.section}>
                <div className={styles.sectionLabel}>COMPONENT 05</div>
                <h2 className={styles.sectionTitle}>Visual Essay</h2>
                <p className={styles.sectionDesc}>
                    A narrative visual essay connecting loneliness data, creative barriers,
                    and HackPGH's role as a modern third place in Pittsburgh.
                </p>
                <div className={styles.pdfWrapper}>
                    <iframe
                        src={visualEssay}
                        title="HackPGH Visual Essay"
                        className={styles.pdfEmbed}
                    />
                    <a
                        href={visualEssay}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.pdfButton}
                    >
                        Open Visual Essay in New Tab →
                    </a>
                </div>
            </section>

            <div className={styles.divider} />

            <section className={styles.section}>
                <div className={styles.sectionLabel}>COMPONENT 06</div>
                <h2 className={styles.sectionTitle}>Promotional Video</h2>
                <p className={styles.sectionDesc}>
                    A 90-second documentary-style promo opening with the loneliness epidemic
                    and resolving with HackPGH as Pittsburgh's answer.
                </p>
                <div className={styles.videoWrapper}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/XVbANIoaLlo?si=vNM1rJLLvQ4HgSG3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <div className={styles.divider} />

            <section className={styles.section}>
                <div className={styles.sectionLabel}>COMPONENT 07</div>
                <h2 className={styles.sectionTitle}>Audio Documentary</h2>
                <p className={styles.sectionDesc}>
                    A 2.5-minute narrated audio piece telling HackPGH's story through voice,
                    music, and the quiet power of the third place concept.
                </p>
                <div className={styles.audioWrapper}>
                    <div className={styles.audioVisual}>
                        <span className={styles.audioIcon}>🎙</span>
                        <span className={styles.audioTitle}>HackPGH — Pittsburgh's Third Place</span>
                    </div>
                    <audio controls className={styles.audioPlayer}>
                        <source src={podcast} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </section>

            <div className={styles.divider} />

            <section className={styles.section}>
                <div className={styles.sectionLabel}>COMPONENT 08</div>
                <h2 className={styles.sectionTitle}>Social Media Series</h2>
                <p className={styles.sectionDesc}>
                    Five platform-specific posts — each one a different entry point into the
                    same Third Place story, tailored to where each audience already lives online.
                </p>
                <div className={styles.socialGrid}>
                    {socialPosts.map((post) => (
                        <div key={post.platform} className={styles.socialCard}>
                            <img
                                src={post.file}
                                alt={`${post.platform} post`}
                                className={styles.socialImage}
                            />
                            <span className={styles.socialPlatform}>{post.platform}</span>
                        </div>
                    ))}
                </div>
            </section>

            <div className={styles.divider} />

            <section className={styles.section}>
                <div className={styles.sectionLabel}>COMPONENT 09</div>
                <h2 className={styles.sectionTitle}>Pitch Presentation</h2>
                <p className={styles.sectionDesc}>
                    A 6-minute recorded Zoom presentation pitching the campaign to HackPGH
                    as a simulated client — strategy, rationale, and full asset showcase.
                </p>
                <div className={styles.videoWrapper}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/jznoyH8liws?si=ZNIBGn6Ha7BjBDjK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <div className={styles.divider} />

            <section className={styles.cta}>
                <div className={styles.ctaInner}>
                    <h2 className={styles.ctaTitle}>Find Your Place.</h2>
                    <p className={styles.ctaText}>
                        Free public tours every Monday & Saturday at 7:30PM.
                        Walk-ins welcome — RSVPs preferred.
                    </p>
                    <p className={styles.ctaAddress}>1936 5th Ave, Pittsburgh, PA 15219</p>
                    <a
                        href="https://www.hackpgh.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}
                    >
                        hackpgh.org
                    </a>
                </div>
            </section>

        </div>
    );
}

export default HackPage;