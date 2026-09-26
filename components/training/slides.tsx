import {
  Bullets,
  Callout,
  DataTable,
  Kicker,
  Lede,
  SlideTitle,
} from "@/components/training/slide-kit"

export type Slide = {
  id: string
  content: React.ReactNode
}

export const slides: Slide[] = [
  {
    id: "title",
    content: (
      <div className="text-center">
        <Kicker>Spotlight Iași · Club Speech Contest</Kicker>
        <h1 className="mt-4 font-heading text-4xl font-bold text-balance text-primary md:text-6xl">
          Contestant Training
        </h1>
        <p className="mt-3 text-xl font-semibold text-secondary md:text-2xl">
          Humorous Speech &amp; Table Topics
        </p>
        <div className="mx-auto max-w-2xl">
          <Lede>
            Everything you need to know to compete fairly, avoid an accidental
            disqualification, and know exactly what to expect.
          </Lede>
        </div>
      </div>
    ),
  },
  {
    id: "bigger-picture",
    content: (
      <>
        <Kicker>The Bigger Picture</Kicker>
        <SlideTitle>Why This Contest Exists</SlideTitle>
        <Bullets
          items={[
            "Speech contests are part of Toastmasters' educational program — real speaking experience for you, and a chance for the club to learn by watching.",
            "Today we're running two separate contests, back-to-back: Humorous Speech and Table Topics. Each one wraps up fully before the next begins.",
            <>
              Place 1st here, and you move on:{" "}
              <strong>Club → Area D4 → Division D → District.</strong>
            </>,
            "These two contest types stop at District — only the International Speech Contest goes further.",
          ]}
        />
      </>
    ),
  },
  {
    id: "eligibility",
    content: (
      <>
        <Kicker>Before You Compete</Kicker>
        <SlideTitle>Am I Eligible?</SlideTitle>
        <Bullets
          items={[
            "A paid member in good standing of this club.",
            "Not serving as a contest official today — judge, timer, counter, Sergeant at Arms, contest chair, or contest Toastmaster.",
            "No education requirement to meet — that only applies to the International Speech Contest.",
            "You're never charged a fee to compete.",
            "A member of more than one club? You can compete in each club's contest — just not more than one Area-level contest of the same type later on.",
            "Rare edge cases: certain incumbent District/International officers or candidates, and a past World Champion of Public Speaking, are ineligible.",
          ]}
        />
        <Callout tone="blue">
          If you advance, you must stay eligible the whole way through — even an
          issue discovered later can disqualify you retroactively.
        </Callout>
      </>
    ),
  },
  {
    id: "formats",
    content: (
      <>
        <Kicker>Know Your Contest</Kicker>
        <SlideTitle>Two Very Different Formats</SlideTitle>
        <DataTable
          columns={["", "Humorous Speech", "Table Topics"]}
          rows={[
            ["Topic", "You choose it", "Assigned live, same for everyone"],
            [
              "When you learn it",
              "Whenever you want",
              "Only the moment you're introduced",
            ],
            ["Time limit", "5–7 minutes", "1–2 minutes"],
            [
              "Can you prepare it in advance?",
              "Yes — it's a full prepared speech",
              "No — it's spontaneous",
            ],
            [
              "Where you wait",
              "In the room the whole time",
              "Outside, until it's your turn",
            ],
          ]}
        />
        <Callout>
          The Table Topics question will be general — no expert knowledge needed
          — and everyone gets the exact same one.
        </Callout>
      </>
    ),
  },
  {
    id: "judging-criteria",
    content: (
      <>
        <Kicker>Judging</Kicker>
        <SlideTitle>What Judges Are Actually Looking For</SlideTitle>
        <DataTable
          columns={["Category", "Weight", "What it really means"]}
          rows={[
            [
              "Content",
              "55%",
              "The substance — structure, ideas, does it land with the audience",
            ],
            ["Delivery", "30%", "How you physically and vocally present it"],
            [
              "Language",
              "15%",
              "Word choice and correct grammar/pronunciation",
            ],
          ]}
        />
        <Lede>Same weighting for both contests.</Lede>
      </>
    ),
  },
  {
    id: "judging-content-details",
    content: (
      <>
        <Kicker>Judging</Kicker>
        <SlideTitle>What &ldquo;Content&rdquo; Actually Covers</SlideTitle>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-lg font-bold text-secondary">
              Table Topics
            </h2>
            <Bullets
              items={[
                <>
                  <strong>Speech Development:</strong> a clear opening, body,
                  and conclusion — even in under 2 minutes.
                </>,
                <>
                  <strong>Effectiveness:</strong> is your point clear and
                  logical? Did you actually answer the question?
                </>,
              ]}
            />
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold text-secondary">
              Humorous Speech
            </h2>
            <Bullets
              items={[
                <>
                  <strong>Speech Development:</strong> real structure — not a
                  list of unrelated jokes.
                </>,
                <>
                  <strong>Effectiveness:</strong> did the audience get your
                  purpose and stay interested?
                </>,
                <>
                  <strong>Speech Value:</strong> an actual idea or point, even
                  inside the humor.
                </>,
                <>
                  <strong>Audience Response:</strong> did people genuinely laugh
                  and stay engaged?
                </>,
              ]}
            />
          </div>
        </div>
      </>
    ),
  },
  {
    id: "judging-delivery-language",
    content: (
      <>
        <Kicker>Judging</Kicker>
        <SlideTitle>Delivery &amp; Language — Same for Both</SlideTitle>
        <Bullets
          items={[
            <>
              <strong>Physical:</strong> appearance, body language, and how you
              use the speaking area.
            </>,
            <>
              <strong>Voice:</strong> variety in pitch, pace, and volume — and
              being clearly heard.
            </>,
            <>
              <strong>Manner</strong> (Humorous only): enthusiasm, assurance,
              and a genuine connection with the audience.
            </>,
            <>
              <strong>Appropriateness:</strong> word choice that fits your
              purpose and this audience.
            </>,
            <>
              <strong>Correctness:</strong> proper grammar, pronunciation, and
              word choice.
            </>,
          ]}
        />
      </>
    ),
  },
  {
    id: "how-winners-decided",
    content: (
      <>
        <Kicker>Judging</Kicker>
        <SlideTitle>How Scores Become a Placement</SlideTitle>
        <Bullets
          items={[
            "Each judge privately ranks their personal top three: 1st, 2nd, 3rd.",
            <>
              1st = <strong>3 points</strong>, 2nd = <strong>2 points</strong>,
              3rd = <strong>1 point</strong> — most total points wins.
            </>,
            "You don't need one flawless, perfect speech — you just need enough judges to individually rank you in their top three.",
            "Judged purely on your speech — never your club, age, gender, or background. You (and the audience) generally won't know who judged you, either.",
            "If there's ever a tie, a secret tiebreaking judge — unknown to everyone but the chief judge — settles it.",
          ]}
        />
        <Callout tone="blue">
          Timing disqualification is decided separately from scoring — even the
          best-scored speech can still be disqualified on time.
        </Callout>
      </>
    ),
  },
  {
    id: "originality",
    content: (
      <>
        <Kicker>Your Speech</Kicker>
        <SlideTitle>It Has to Be Original</SlideTitle>
        <Bullets
          items={[
            "Substantially your own, original content.",
            "Up to 25% can be quoted or referenced — but credit it out loud during your speech.",
            "Never reference another contestant, or their speech, in yours.",
            "You'll sign the Speaker's Certification of Eligibility and Originality.",
          ]}
        />
        <Callout>
          Humorous Speech only: real structure — opening, body, close. A string
          of unrelated one-liners doesn't count. Keep it clean.
        </Callout>
      </>
    ),
  },
  {
    id: "timing",
    content: (
      <>
        <Kicker>Timing</Kicker>
        <SlideTitle>Know These Numbers Cold</SlideTitle>
        <DataTable
          columns={[
            "Contest",
            "Speak between",
            "Disqualified if",
            "🟢",
            "🟡",
            "🔴",
          ]}
          rows={[
            [
              "Humorous",
              "5:00–7:00",
              "Under 4:30 or over 7:30",
              "5:00",
              "6:00",
              "7:00",
            ],
            [
              "Table Topics",
              "1:00–2:00",
              "Under 1:00 or over 2:30",
              "1:00",
              "1:30",
              "2:00",
            ],
          ]}
        />
        <Bullets
          items={[
            "Signal equipment fails? You automatically get 30 extra seconds of grace.",
            "Visually impaired? You can request an alternate signal (buzzer, bell, spoken time) — just ask the contest chair in advance.",
          ]}
        />
      </>
    ),
  },
  {
    id: "paperwork",
    content: (
      <>
        <Kicker>Paperwork</Kicker>
        <SlideTitle>Forms &amp; Deadlines</SlideTitle>
        <Bullets
          items={[
            <>
              Speech Contestant Profile — your bio info, used for interview
              questions and press releases.{" "}
              <strong>Return it to the contest chair</strong> by your deadline.
            </>,
            <>
              Speaker's Certification of Eligibility and Originality —{" "}
              <strong>two separate certifications, two signatures.</strong> Fill
              in your club number, member number, and district; check the right
              contest box (Humorous / Table Topics) and contest level (Club).{" "}
              <strong>Hand the signed form to the chief judge</strong> — not the
              contest chair — before the contest.
            </>,
            "Planning props? Tell the contest chair in advance — mostly relevant for Humorous Speech.",
          ]}
        />
      </>
    ),
  },
  {
    id: "before-you-go-on",
    content: (
      <>
        <Kicker>Contest Day</Kicker>
        <SlideTitle>Before You Go On</SlideTitle>
        <Bullets
          items={[
            "Briefing with the contest chair: names confirmed, rules reviewed, mic tested, you draw for speaking order.",
            "Running late or missed the briefing? Tell the contest chair immediately. If you still haven't shown up by the time the contest chair is introduced to begin the contest, you're disqualified.",
            "Contest opens: ground rules announced to the whole audience — for Humorous, they'll also mention your content is self-chosen and could be personal. That's routine, not a comment on you.",
          ]}
        />
      </>
    ),
  },
  {
    id: "your-turn",
    content: (
      <>
        <Kicker>Contest Day</Kicker>
        <SlideTitle>When It&apos;s Your Turn</SlideTitle>
        <Bullets
          items={[
            "You're introduced with your name and your speech title (or your topic, for Table Topics) — each said twice, nothing else. No preamble, no hype, no comments about you or your subject.",
            <>
              Walk up right away, say{" "}
              <strong>&ldquo;Thank you, Contest Chair.&rdquo;</strong>
            </>,
            <>
              Wait for <strong>&ldquo;You&apos;re welcome&rdquo;</strong> —
              that&apos;s when your timing officially starts.
            </>,
            'When you finish, say "Contest Chair", wait for the contest chair to shake your hand, and quietly return to your seat and clear any props during the minute of silence that follows.',
          ]}
        />
        <Callout tone="blue">
          Table Topics: you were waiting outside — no notes, no devices — called
          in one at a time. Humorous: you&apos;ve been watching from your seat
          the whole time.
        </Callout>
      </>
    ),
  },
  {
    id: "after-the-speeches",
    content: (
      <>
        <Kicker>Contest Day</Kicker>
        <SlideTitle>After the Speeches</SlideTitle>
        <Bullets
          items={[
            "A couple of quiet minutes while judges finish marking their ballots.",
            "Interview time: the contest chair calls you up, hands you your certificate of participation, and asks 2–3 quick questions.",
            <>
              Results announced in reverse order:{" "}
              <strong>3rd → 2nd → 1st.</strong>
            </>,
          ]}
        />
      </>
    ),
  },
  {
    id: "conduct",
    content: (
      <>
        <Kicker>Conduct</Kicker>
        <SlideTitle>Rules That Keep It Fair</SlideTitle>
        <Bullets
          items={[
            "Phone silent — no exceptions.",
            "No photography during a speech. Video only with the contestant's and contest chair's consent.",
            "Don't enter or leave mid-speech — only during the minute of silence between speakers.",
            "Table Topics: no notes or devices.",
            "Never reference another contestant or their speech.",
            "Don't delay once you reach the speaking area — start speaking soon after you arrive.",
          ]}
        />
      </>
    ),
  },
  {
    id: "protests",
    content: (
      <>
        <Kicker>If Something Goes Wrong</Kicker>
        <SlideTitle>Protests</SlideTitle>
        <Bullets
          items={[
            "Only contestants and judges can raise a protest, and only to the contest chair or chief judge — audience objections are never considered.",
            "Limited to eligibility, originality, or referencing another contestant's speech — not scoring or opinions.",
            "Must be raised before the contest is officially declared over.",
            "If the protest is about your speech, the voting judges will hear your side before they decide anything.",
          ]}
        />
      </>
    ),
  },
  {
    id: "advancing",
    content: (
      <>
        <Kicker>Looking Ahead</Kicker>
        <SlideTitle>Advancing Beyond Club Level</SlideTitle>
        <Bullets
          items={[
            "The 1st place winner advances to represent the club at the Area D4 contest.",
            <>
              To advance, you have to stay eligible the whole way through — same
              rules as the &ldquo;Am I Eligible?&rdquo; slide.
            </>,
            "If the winner can't compete at Area D4, the next-highest-placed contestant from today steps in instead.",
            "Reminder: for these two contest types, the chain stops at District.",
          ]}
        />
      </>
    ),
  },
  {
    id: "recap",
    content: (
      <div>
        <Kicker>Before You Go</Kicker>
        <SlideTitle>Quick Recap</SlideTitle>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div>
            <h2 className="font-heading text-lg font-bold text-secondary">
              Before
            </h2>
            <Bullets
              items={[
                "Forms signed & submitted",
                "Props flagged, if any",
                "Briefing attended, mic tested",
                "Know the judging criteria — prep structure & audience connection",
              ]}
            />
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold text-secondary">
              During
            </h2>
            <Bullets
              items={[
                "Phone silent",
                <>
                  &ldquo;Thank you, Contest Chair&rdquo; → wait for
                  &ldquo;You&apos;re welcome&rdquo;
                </>,
                "Know your time window",
                "Don't reference other contestants",
                "Table Topics: no notes, no devices, wait outside until called",
              ]}
            />
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold text-secondary">
              After
            </h2>
            <Bullets
              items={[
                "Clear your props",
                "Stay for your interview",
                "Listen for results: 3rd → 2nd → 1st",
              ]}
            />
          </div>
        </div>
        <p className="mt-10 text-center font-heading text-2xl font-bold text-primary md:text-3xl">
          Good luck — go make Spotlight Iași proud.
        </p>
      </div>
    ),
  },
]
