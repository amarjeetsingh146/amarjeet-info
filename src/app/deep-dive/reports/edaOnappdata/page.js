import Link from 'next/link';

export default function Page() {
  return (
    <main className="content article">


        <Link href="/deep-dive" className="back-btn">← Back to Deep Dives</Link>

        <h1>EDA on Google Play Store Dataset</h1>
        <div className="meta">
            Data Analysis • EDA • Business Insights
        </div>

        <p className="intro">
            The Google Play Store contains millions of applications, but only a small
            percentage achieve high installs and strong user ratings.
            This deep dive explores:
            <strong>What factors drive app success on the Play Store?</strong>
        </p>

        <section>
            <h2>Problem Statement</h2>
            <p>
                App developers often launch products without understanding how category,
                pricing, or user engagement affect performance.
                As a result, many apps fail to gain traction.
            </p>
            <p>
                This analysis uses real Play Store data to uncover patterns behind
                ratings, installs, and reviews.
            </p>
        </section>

        <section>
            <h2>Dataset Overview</h2>
            <p>
                The dataset includes metadata for thousands of Play Store applications,
                covering:
            </p>
            <ul>
                <li>App categories and content ratings</li>
                <li>User ratings and review counts</li>
                <li>Install numbers</li>
                <li>Pricing models and app sizes</li>
            </ul>
        </section>

        <section>
            <h2>Key Questions Explored</h2>
            <ul>
                <li>Which app categories dominate the Play Store?</li>
                <li>Do paid apps receive higher ratings than free apps?</li>
                <li>How strongly are installs correlated with reviews?</li>
                <li>Does app size or price influence user ratings?</li>
            </ul>
        </section>

        <section>
            <h2>Core Insights</h2>
            <ul>
                <li>Reviews are strongly correlated with installs</li>
                <li>Paid apps tend to have slightly higher ratings but lower reach</li>
                <li>Highly saturated categories require strong differentiation</li>
                <li>Pricing alone does not guarantee success</li>
            </ul>

            <blockquote>
                App success depends more on engagement and experience than pricing or category alone.
            </blockquote>
        </section>

        <section>
            <h2>Why This Matters</h2>
            <p>
                These insights help developers and startups:
            </p>
            <ul>
                <li>Choose better app categories</li>
                <li>Design effective pricing strategies</li>
                <li>Focus on user engagement and retention</li>
            </ul>
        </section>

        <section>
            <h2>Limitations & Future Work</h2>
            <p>
                This analysis is exploratory in nature.
                Future work includes predictive modeling,
                sentiment analysis on reviews,
                and time-based trend analysis.
            </p>
        </section>

        <section>
            <h2>Source Code</h2>
            <p>
                The complete EDA notebook and analysis are available on GitHub:
            </p>

            <Link className="project-link" href="/soon" target="_blank">
                View Repository →
            </Link>
        </section>


    
    </main>
  );
}
