// Marketing written Q&A - part 5: detailed answers for Unit IV (Marketing Mix: product, price, place, promotion).
// Source: Syllabus/marketing.jpeg (topics) + standard textbooks (Kotler & Keller; Saxena). No notes PDF exists for this unit -> [extra].
(function () {
  const { L, O, E, T, D, F } = window.ExamQA;
  const SY = 'Syllabus image (Unit IV topics) + standard textbooks [extra - check with class notes]';
  const P = (s) => `<p>${s}</p>`;
  const H = (s) => `<h4>${s}</h4>`;
  const FL = (...a) => `<p><b>Flow:</b> ${a.join(' → ')}</p>`;

  window.ExamQA.add('marketing', [
    { m: 10, u: 'Unit IV', t: 'Marketing Mix', p: 3, q: `What is the marketing mix? Explain the 4Ps with decisions in each element and examples.`,
      a: H(`1. Introduction`) + P(`The <b>marketing mix</b> is the set of controllable tools - <b>Product, Price, Place and Promotion</b> - that a firm blends to get the response it wants from its target market (E. Jerome McCarthy; Kotler). The mix is built after segmentation, targeting and positioning, so that every P supports the chosen position.`) +
        H(`2. The four Ps`) + T(['P', 'Key decisions', 'Example'], [['Product', 'Variety, quality, design, features, brand, packaging, services', 'A phone with brand, camera, warranty'], ['Price', 'List price, discounts, credit terms, pricing method', 'Rs 999 psychological price'], ['Place', 'Channels, coverage, locations, inventory, logistics', 'Soap in every kirana store'], ['Promotion', 'Advertising, personal selling, sales promotion, PR, digital', 'TV ad plus social media campaign']]) +
        H(`3. 4Ps and 4Cs`) + T(['4Ps (seller)', '4Cs (buyer)'], [['Product', 'Customer solution'], ['Price', 'Customer cost'], ['Place', 'Convenience'], ['Promotion', 'Communication']]) +
        H(`4. Extended mix for services`) + P(`Services add <b>People, Process and Physical evidence</b> (7Ps).`) +
        H(`5. Conclusion`) + P(`The four Ps must be consistent: a luxury product with a high price needs exclusive outlets and prestige advertising. A weak P spoils the whole mix.`),
      ms: `Introduction 2 · table of 4Ps 4 · 4Cs 1 · conclusion 1 · example 2`, src: SY },
    { m: 10, u: 'Unit IV', t: 'Product', p: 3, q: `What is a product? Explain the levels of a product and the product mix with examples.`,
      a: H(`1. Meaning`) + P(`A <b>product</b> is anything offered to a market to satisfy a want or need - goods, services, experiences, persons, places or ideas.`) +
        H(`2. Levels of a product`) + T(['Level', 'Meaning', 'Example (smartphone)'], [['Core benefit', 'The basic need being met', 'Communication'], ['Actual product', 'Brand, features, design, quality, packaging', 'Model, camera, display'], ['Augmented product', 'Extra services and benefits', 'Warranty, after-sales service, EMI']]) +
        H(`3. Product mix`) + P(`The <b>product mix</b> is the set of all products a seller offers. A <b>product line</b> is a group of closely related products.`) +
        T(['Dimension', 'Meaning'], [['Width', 'Number of product lines (soaps, detergents, foods)'], ['Length', 'Total number of items in all lines'], ['Depth', 'Number of versions of each product (sizes x variants)'], ['Consistency', 'How closely the lines are related']]) +
        H(`4. Conclusion`) + P(`Firms widen the mix to spread risk and deepen it to cover more segments; a consistent mix saves cost on distribution and promotion.`),
      ms: `Meaning 1 · levels 3 · mix dimensions 4 · example 1 · conclusion 1`, src: SY },
    { m: 10, u: 'Unit IV', t: 'New Product Development', p: 3, q: `Explain the stages of new product development (NPD). Why do many new products fail?`,
      a: H(`1. Introduction`) + P(`<b>New product development</b> is the process of taking a new idea to the market. It reduces risk by screening ideas stage by stage.`) +
        H(`2. Stages`) + FL('Idea generation', 'Screening', 'Concept testing', 'Marketing strategy', 'Business analysis', 'Product development', 'Test marketing', 'Commercialisation') +
        T(['Stage', 'What happens'], [['Idea generation', 'Ideas from customers, employees, R&amp;D, competitors'], ['Idea screening', 'Poor ideas dropped (GO / DROP)'], ['Concept testing', 'Idea tested with target customers'], ['Marketing strategy', 'Target market, positioning, first-year plan'], ['Business analysis', 'Sales, cost and profit forecasts'], ['Product development', 'Prototype, technical tests'], ['Test marketing', 'Limited launch in a selected market'], ['Commercialisation', 'Full launch: when, where, to whom, how']]) +
        H(`3. Reasons for failure`) + L(`Poor market research and wrong timing.`, `High development cost, weak promotion or poor distribution.`, `Product not different from existing ones.`, `Over-estimated market size; strong competitor reaction.`) +
        H(`4. Conclusion`) + P(`Disciplined screening and test marketing are the best protection against failure.`),
      ms: `Introduction 1 · stages with table 6 · failure reasons 2 · conclusion 1`, src: SY },
    { m: 10, u: 'Unit IV', t: 'Product Life Cycle', p: 3, q: `What is the product life cycle? Explain its stages and the marketing strategies for each stage with a diagram.`,
      a: H(`1. Meaning`) + P(`The <b>product life cycle (PLC)</b> shows the stages a product passes through from launch to withdrawal: sales and profit change with each stage, so the marketing mix must change as well.`) +
        D(`Sales ↑ — Introduction (slow rise) → Growth (steep rise) → Maturity (peak, flattening) → Decline (fall). Profit curve peaks near the end of growth / early maturity.`) +
        H(`2. Stages and strategies`) + T(['Stage', 'Sales / profit', 'Strategy'], [['Introduction', 'Low sales, losses', 'Create awareness; skimming or penetration pricing; limited distribution'], ['Growth', 'Rapid sales, profit rises', 'Improve quality, add features, widen distribution, build preference'], ['Maturity', 'Sales peak, profit highest then falls', 'Modify market, product and mix; defend share; promotions'], ['Decline', 'Sales and profit fall', 'Harvest, divest or drop; cut cost']]) +
        H(`3. Limitations`) + L(`Not all products follow the curve; stage length varies.`, `Hard to identify the current stage; fashions and fads have short cycles.`) +
        H(`4. Conclusion`) + P(`PLC is a planning tool: it tells the manager when to push, defend or exit.`),
      ms: `Meaning 1 · diagram 2 · stages 4 · limitations 1 · conclusion 2`, src: SY },
    { m: 6, u: 'Unit IV', t: 'Branding', p: 3, q: `What is a brand? Explain brand name, brand mark, trademark and brand equity. Discuss any two branding strategies.`,
      a: H(`Meaning`) + P(`A <b>brand</b> is a name, term, sign, symbol or design - or a combination - that identifies one seller's goods and separates them from competitors.`) +
        T(['Term', 'Meaning', 'Example'], [['Brand name', 'The part that can be spoken', 'Nike'], ['Brand mark', 'The symbol or design', 'The swoosh'], ['Trademark', 'Legally protected brand', 'Registered logo'], ['Brand equity', 'Value a brand adds: awareness, loyalty, quality, associations', 'Customers pay more for the brand']]) +
        H(`Two strategies`) + L(`<b>Line extension</b> - new variants in the same category (new flavour of a biscuit).`, `<b>Brand extension</b> - the existing brand used in a new category (a soap brand launching shampoo).`) +
        P(`<b>Features of a good brand name:</b> short, easy to say and remember, suggests benefits, distinctive and registrable.`),
      ms: `Meaning 1 · four terms 2 · two strategies 2 · features 1`, src: SY },
    { m: 5, u: 'Unit IV', t: 'Packaging', p: 3, q: `Explain the functions of packaging and the role of labelling.`,
      a: H(`Levels`) + L(`<b>Primary</b> - holds the product (toothpaste tube).`, `<b>Secondary</b> - outer box.`, `<b>Tertiary</b> - bulk shipping cartons.`) +
        H(`Functions`) + L(`<b>Protection</b> from damage, spoilage and tampering.`, `<b>Convenience</b> in storing, handling and use.`, `<b>Promotion</b> - the 'silent salesman' attracts attention on the shelf.`, `<b>Identification</b> of brand and variant.`, `<b>Information</b> and safety instructions.`) +
        H(`Labelling`) + P(`The label gives brand, ingredients, MRP, net quantity, manufacturing / expiry dates, usage and warnings. It informs the buyer and meets legal requirements.`),
      ms: `Levels 1 · functions 3 · labelling 1`, src: SY },
    { m: 10, u: 'Unit IV', t: 'Pricing Methods', p: 3, q: `What is pricing? Explain the factors affecting pricing and the main pricing methods with examples.`,
      a: H(`1. Meaning`) + P(`<b>Price</b> is the amount charged for a product or service. It is the only P that produces revenue and it signals quality and position.`) +
        H(`2. Factors affecting pricing`) + T(['Internal', 'External'], [['Marketing objectives, cost, marketing-mix strategy, PLC stage', 'Demand, competition, economic conditions, government rules, channel members']]) +
        H(`3. Pricing methods`) + T(['Approach', 'Method', 'How it works'], [['Cost-based', 'Cost-plus', 'Price = cost + mark-up (cost Rs 80, 25% = Rs 100)'], ['Cost-based', 'Break-even / target-return', 'Cover total cost or earn a target return'], ['Demand-based', 'Perceived-value', 'Price by what buyers think it is worth'], ['Competition-based', 'Going-rate / sealed-bid', 'Follow rivals or bid in tenders']]) +
        F(`Break-even units = Fixed cost ÷ (Price − Variable cost per unit)`) +
        H(`4. Conclusion`) + P(`A good price covers cost, matches the product's perceived value and stays competitive.`),
      ms: `Meaning 1 · factors 2 · methods 5 · formula 1 · conclusion 1`, src: SY },
    { m: 5, u: 'Unit IV', t: 'Pricing Strategies', p: 3, q: `Distinguish between market skimming and market penetration pricing.`,
      a: T(['Basis', 'Market skimming', 'Market penetration'], [['Meaning', 'High initial price, lowered later', 'Low initial price to win share fast'], ['Aim', 'Recover cost quickly; premium image', 'Large market share, volume'], ['Suitable when', 'Product new and unique; buyers willing to pay', 'Price-sensitive market; rivals will enter; economies of scale'], ['Risk', 'Invites competitors', 'Low profit initially; hard to raise price'], ['Example', 'New gadget at a premium price', 'Telecom data plans at very low prices']]),
      ms: `Any 5 points with table`, src: SY },
    { m: 6, u: 'Unit IV', t: 'Adapting Prices', p: 3, q: `Explain price adaptation strategies and price discrimination with examples.`,
      a: H(`Adapting prices`) + T(['Strategy', 'Meaning', 'Example'], [['Psychological', 'Prices that appeal to emotion', 'Rs 999 instead of Rs 1,000'], ['Promotional', 'Temporary price cuts', 'Festival sale'], ['Geographical', 'Price by location / transport', 'Delivery charges, zone pricing'], ['Discounts and allowances', 'Cash, quantity, seasonal discounts', '2% for early payment'], ['Product-mix pricing', 'Pricing across a line or bundle', 'Bundle pricing']]) +
        H(`Price discrimination`) + P(`Charging <b>different prices for the same product</b> to different customers without a matching cost difference - by segment (student discount), time (peak and off-peak), place or product version. It works only if the market can be separated and buyers cannot resell.`),
      ms: `Adapting strategies 3 · discrimination 3`, src: SY },
    { m: 10, u: 'Unit IV', t: 'Distribution Channels', p: 3, q: `What are distribution channels? Explain the types (levels) of channels, the functions of intermediaries and the factors affecting channel choice.`,
      a: H(`1. Meaning`) + P(`A <b>distribution channel</b> is the path through which goods move from the producer to the consumer. <b>Place</b> makes goods available at the right time, place and quantity.`) +
        H(`2. Channel levels`) + T(['Channel', 'Path', 'Example'], [['Zero-level (direct)', 'Manufacturer → Consumer', 'Own online store, door-to-door'], ['One-level', 'Manufacturer → Retailer → Consumer', 'Car showroom'], ['Two-level', 'Manufacturer → Wholesaler → Retailer → Consumer', 'FMCG goods'], ['Three-level', 'Manufacturer → Agent → Wholesaler → Retailer → Consumer', 'Distant markets']]) +
        H(`3. Functions of intermediaries`) + L(`Break bulk and carry stock; time and place utility.`, `Finance, risk-bearing, information and promotion; after-sales service.`) +
        H(`4. Factors affecting channel choice`) + L(`Nature of product (perishable, bulky, technical).`, `Market: number and location of customers.`, `Manufacturer's resources and control wanted; competition; cost; legal rules.`) +
        H(`5. Conclusion`) + P(`Modern firms use omni-channel - physical and digital together - to maximise reach and convenience.`),
      ms: `Meaning 1 · levels table 4 · functions 2 · factors 2 · conclusion 1`, src: SY },
    { m: 5, u: 'Unit IV', t: 'Distribution Channels', p: 3, q: `Explain intensive, selective and exclusive distribution with examples.`,
      a: T(['Strategy', 'Meaning', 'Used for', 'Example'], [['Intensive', 'Product in as many outlets as possible', 'Convenience goods', 'Soap, snacks'], ['Selective', 'A limited number of chosen outlets', 'Shopping goods', 'Appliances'], ['Exclusive', 'Only one outlet in a territory', 'Luxury goods', 'Luxury cars']]) +
        P(`The choice depends on the product, price, image wanted and the control the firm wants over the sale.`),
      ms: `Three strategies 3 · examples 2`, src: SY },
    { m: 6, u: 'Unit IV', t: 'Logistics', p: 3, q: `What is logistics? Explain its elements and importance.`,
      a: H(`Meaning`) + P(`<b>Logistics</b> (physical distribution) is the planning, implementing and controlling of the flow of goods from point of origin to point of use, to meet customer needs at a profit - the right goods, at the right place and time, in the right condition, at lowest total cost.`) +
        H(`Elements`) + T(['Element', 'Role'], [['Order processing', 'Receive and execute orders quickly and accurately'], ['Warehousing', 'Store goods in depots / distribution centres'], ['Inventory management', 'Keep the right stock - avoid shortage and excess'], ['Transportation', 'Road, rail, air, sea - cost, speed, safety'], ['Materials handling and packaging', 'Protect goods in transit']]) +
        H(`Importance`) + L(`Customer satisfaction; cost saving; competitive advantage.`),
      ms: `Meaning 2 · elements 3 · importance 1`, src: SY },
    { m: 10, u: 'Unit IV', t: 'Promotion Mix', p: 3, q: `What is the promotion mix? Explain its tools with merits and limitations.`,
      a: H(`1. Meaning`) + P(`<b>Promotion</b> is marketing communication that informs, persuades and reminds customers. The blend of tools is the <b>promotion mix</b>. Good promotion follows <b>AIDA</b>: Attention, Interest, Desire, Action.`) +
        H(`2. Tools`) + T(['Tool', 'Meaning', 'Merits', 'Limitations'], [['Advertising', 'Paid, non-personal presentation by an identified sponsor', 'Wide reach, builds image', 'Costly, impersonal'], ['Personal selling', 'Face-to-face presentation to make a sale', 'Two-way, flexible, relationship', 'High cost per contact'], ['Sales promotion', 'Short-term incentives (samples, coupons, contests)', 'Quick sales effect', 'Short lived'], ['Public relations', 'Press releases, events, sponsorship, CSR', 'Credible, low cost', 'Little control over media'], ['Digital media', 'Search, social, email, influencers', 'Targeted, measurable, cheap', 'Clutter, needs data skills']]) +
        H(`3. Factors affecting the mix`) + L(`Type of product, PLC stage, target market, budget, push / pull strategy, competitors.`) +
        H(`4. Conclusion`) + P(`An integrated mix gives one consistent message across tools.`),
      ms: `Meaning and AIDA 2 · five tools 5 · factors 1 · conclusion 2`, src: SY },
    { m: 6, u: 'Unit IV', t: 'Advertising', p: 3, q: `What is advertising? Explain its objectives, media and the steps in making an advertising decision.`,
      a: H(`Meaning`) + P(`<b>Advertising</b> is any paid, non-personal presentation of ideas, goods or services by an identified sponsor.`) +
        H(`Objectives`) + L(`Inform (launch), persuade (build preference), remind (keep awareness).`) +
        H(`Media`) + L(`Television, newspapers and magazines, radio, outdoor hoardings, cinema, internet and mobile.`) +
        H(`Steps`) + FL('Set objectives', 'Budget', 'Message (copy)', 'Media selection', 'Evaluate results'),
      ms: `Meaning 1 · objectives 1.5 · media 1.5 · steps 2`, src: SY },
    { m: 6, u: 'Unit IV', t: 'Personal Selling', p: 3, q: `Explain the steps in the personal selling process.`,
      a: FL('Prospecting', 'Pre-approach', 'Approach', 'Presentation and demonstration', 'Handling objections', 'Closing', 'Follow-up') +
        T(['Step', 'What the salesperson does'], [['Prospecting', 'Finds and qualifies likely buyers'], ['Pre-approach', 'Learns about the prospect, plans the call'], ['Approach', 'Meets the buyer, builds rapport'], ['Presentation', 'Shows features and benefits, demonstrates'], ['Handling objections', 'Answers doubts positively'], ['Closing', 'Asks for the order'], ['Follow-up', 'Ensures delivery, satisfaction, repeat sales']]),
      ms: `Seven steps with explanation, 1 mark each (less 1)`, src: SY },
    { m: 5, u: 'Unit IV', t: 'Sales Promotion', p: 2, q: `What is sales promotion? Explain consumer and trade promotion tools.`,
      a: P(`<b>Sales promotion</b> means short-term incentives used to encourage the purchase or sale of a product.`) +
        T(['Consumer promotion', 'Trade promotion'], [['Free samples, coupons, price-off, premiums (gifts), contests, cash refunds, loyalty points', 'Trade discounts, display allowances, dealer contests, free goods, push money']]) +
        P(`<b>Limitation:</b> effect is short-lived; frequent discounts can lower brand image.`),
      ms: `Meaning 1 · consumer 2 · trade 2`, src: SY },
    { m: 5, u: 'Unit IV', t: 'Digital Promotion', p: 3, q: `Explain the role of digital media in promotion with its tools and benefits.`,
      a: L(`<b>Search engine marketing</b> - SEO and pay-per-click.`, `<b>Social media marketing</b> and influencer / affiliate marketing.`, `<b>Email and SMS</b> marketing; content and video marketing.`) +
        P(`<b>Benefits:</b> precise targeting, measurable results (clicks, conversions), interactive, low entry cost. <b>Limits:</b> clutter and the need for data and skills.`),
      ms: `Tools 3 · benefits 2`, src: SY },
    { m: 5, u: 'Unit IV', t: 'Public Relations', p: 2, q: `What is public relations? Explain its tools and importance.`,
      a: P(`<b>Public relations (PR)</b> builds good relations between the company and its publics.`) + L(`Tools: press releases and conferences, events, product publicity, sponsorship, CSR, crisis communication.`, `Importance: builds trust and a good image at low cost; high credibility.`),
      ms: `Meaning 1 · tools 2 · importance 2`, src: SY },
    { m: 5, u: 'Unit IV', t: 'Promotion Mix', p: 3, q: `Distinguish between push and pull strategies of promotion.`,
      a: T(['Basis', 'Push', 'Pull'], [['Target', 'Channel members (wholesalers, retailers)', 'Final consumers'], ['Tools', 'Trade offers, personal selling', 'Advertising, consumer offers'], ['Aim', 'Push the product through the channel', 'Make consumers demand it from retailers'], ['Suitable for', 'Industrial goods, new brands needing shelf space', 'Branded consumer goods']]),
      ms: `Any 4-5 points`, src: SY },
    { m: 2, u: 'Unit IV', t: 'Marketing Mix', p: 3, q: `Define marketing mix.`, a: P(`The set of controllable tools - product, price, place and promotion - that a firm blends to produce the response it wants in the target market.`), ms: `Definition 2`, src: SY },
    { m: 2, u: 'Unit IV', t: 'Product', p: 2, q: `What is a product line?`, a: P(`A group of closely related products that work in a similar way, are sold to the same customers, or through the same channels - e.g. all soaps of one company.`), ms: `Definition 2`, src: SY },
    { m: 2, u: 'Unit IV', t: 'Branding', p: 3, q: `Define brand equity.`, a: P(`The added value a brand gives to a product - arising from brand awareness, loyalty, perceived quality and associations - so that customers prefer it and pay more.`), ms: `Definition 2`, src: SY },
    { m: 2, u: 'Unit IV', t: 'Pricing Strategies', p: 3, q: `What is price discrimination?`, a: P(`Charging different prices to different customers or in different markets for the same product, not justified by cost differences - e.g. student discounts, peak and off-peak fares.`), ms: `Definition 2`, src: SY },
    { m: 3, u: 'Unit IV', t: 'Logistics', p: 2, q: `Write short notes on warehousing and inventory management.`, a: P(`<b>Warehousing:</b> storing goods in depots and distribution centres until they are needed, creating time utility.`) + P(`<b>Inventory management:</b> keeping the right quantity of stock - enough to avoid stock-outs, not so much that it raises carrying cost.`), ms: `Each 1.5`, src: SY },
    { m: 3, u: 'Unit IV', t: 'Packaging', p: 2, q: `What are the types of packaging? Give examples.`, a: L(`Primary - holds the product (toothpaste tube).`, `Secondary - outer box that holds the primary pack.`, `Tertiary - bulk cartons for shipping and storage.`), ms: `3 types 1 each`, src: SY },
    { m: 3, u: 'Unit IV', t: 'Promotion Mix', p: 3, q: `State the AIDA model.`, a: P(`AIDA describes the stages good promotion leads a buyer through: <b>A</b>ttention → <b>I</b>nterest → <b>D</b>esire → <b>A</b>ction (purchase).`), ms: `Four stages`, src: SY },
  ]);
})();
