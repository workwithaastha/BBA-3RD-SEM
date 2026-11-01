// Extra formula / statement cards (Marketing) added to the shared FormulaLib so the pop-up can explain them too.
(function () {
  const lib = window.FormulaLib;
  if (!lib) return;
  const M = 'marketing';
  lib.cards.push(
    { s: M, g: 'Marketing research', u: 'u2-mr2', n: 'Skip interval (systematic sampling)', f: 'Skip interval = Population list size ÷ Desired sample size', sym: ['Choose a random start between 1 and the interval, then take every k-th unit'],
      what: 'Used to draw a systematic random sample from an ordered list such as a customer or membership roll.', ex: ['List of 1,000 customers, sample needed 100', 'Skip interval = 1,000 ÷ 100 = <b>10</b>', 'Random start 7 → pick units 7, 17, 27 …'], when: ['The target population is available as an ordered list'], where: ['Customer surveys, membership studies'], mistake: 'Starting always from the first unit; the start must be random.' },
    { s: M, g: 'Marketing research', u: 'u2-mr2', n: 'Chi-square (χ²)', f: 'χ² = Σ (O<sub>i</sub> − E<sub>i</sub>)² ÷ E<sub>i</sub>', sym: ['O = observed frequency', 'E = expected frequency if no relationship exists', 'Compare with the table value at the chosen significance level and degrees of freedom'],
      what: 'Tests whether the association between two nominal variables in a cross-tab is statistically significant.', ex: ['Observed purchase intention by age differs from the expected pattern', 'Calculate χ², find degrees of freedom, compare with the critical value', 'If calculated χ² &gt; table value → reject H<sub>0</sub> (association exists)'], when: ['Cross-tabulation of categorical data'], where: ['Bivariate analysis in surveys'], mistake: 'Using it on percentages instead of actual counts.' },
    { s: M, g: 'Marketing research', u: 'u2-mr2', n: 'Mean (arithmetic average)', f: 'Mean = ΣX ÷ N', sym: ['ΣX = sum of all values', 'N = number of values'],
      what: 'Central tendency measure; the most commonly used average.', ex: ['Scores 5, 10, 22, 25, 17', 'Mean = 79 ÷ 5 = <b>15.8</b>'], when: ['Roughly symmetric data'], where: ['Univariate analysis'], mistake: 'Using the mean for skewed data like income; the median is better.' },
    { s: M, g: 'Positioning', u: 'u3-pos', n: 'Positioning statement', f: 'For [target segment] who [need], [Brand] is a [category] that [key benefit], unlike [competitor], because [reason to believe].', sym: ['Target, need, category, benefit, competitor, reason to believe'],
      what: 'A one-sentence template that guides every downstream marketing decision.', ex: ['For safety-conscious families who need a dependable everyday car, Volvo is a premium automobile brand that delivers the industry\'s most advanced safety engineering - unlike other luxury brands - because of over 90 years of safety research.'], when: ['Writing a positioning or answering "write a positioning statement"'], where: ['Brand strategy; Unit III assignment Q3'], mistake: 'Leaving out the reason to believe.' },
    { s: M, g: 'Value proposition', u: 'u3-vp', n: 'Value proposition statement', f: 'For [customer] who [has a problem], our [product] gives [benefit], unlike [others].', sym: ['Problem → Solution → Benefit → Why us'],
      what: 'A short promise of why the customer should choose you.', ex: ['For hungry students who hate long queues, our Pre-Order Canteen serves hot food in 5 minutes. No waiting!'], when: ['Writing a value proposition'], where: ['Unit III assignment Q4'], mistake: 'Writing a slogan instead of a benefit and problem statement.' },
    { s: M, g: 'Sampling', u: 'u2-mr2', n: 'Probability of selection (simple random sampling)', f: 'Probability of selection = Sample size ÷ Population size', sym: ['n = sample size', 'N = population size'],
      what: 'Each unit has a known, equal, non-zero chance of being selected.', ex: ['10 students from a class of 30 → 10 ÷ 30 = <b>0.33</b>'], when: ['Explaining simple random sampling'], where: ['Probability sampling'], mistake: 'Confusing it with the skip interval.' }
  );

  lib.cards.push(
    { s: 'finance', g: 'Basics', u: 'u1', n: "Shareholders' wealth", f: "Shareholders' wealth = Number of shares held × Market price per share", sym: ['The goal of financial management (wealth maximisation)'],
      what: 'The value of an owner\'s stake. Maximising the market price of the share maximises wealth; it considers time value and risk, unlike profit maximisation.', ex: ['An investor holds 1,000 shares priced at ₹120', 'Wealth = 1,000 × 120 = <b>₹1,20,000</b>', 'If the price rises to ₹135 the wealth becomes ₹1,35,000'], when: ['Explaining why wealth maximisation is the accepted objective'], where: ['Unit I; profit vs wealth maximisation answers'], mistake: 'Equating wealth with profit or EPS.' },
    { s: 'finance', g: 'Cost of Capital', u: 'coc', n: 'Growth rate g = b × r', f: 'g = b × r', sym: ['b = retention ratio (share of earnings retained)', 'r = return earned on retained earnings'],
      what: 'The sustainable growth rate of dividends when part of earnings is retained and reinvested.', ex: ['Retention ratio 40%, return on retained earnings 15%', 'g = 0.40 × 15% = <b>6%</b>', 'Used in Ke = D<sub>1</sub>/NP + g'], when: ['Growth is not given directly in a cost-of-equity question'], where: ['Cost of equity - growth method'], mistake: 'Using the dividend payout ratio instead of the retention ratio.' }
  );
})();
