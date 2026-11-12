// Marketing Management - Unit IV: Marketing Mix (4Ps) notes + Exam Master. Syllabus: Syllabus/marketing.jpeg (Course F010303TN, Core Course III, 25+75 marks, 45 lectures: 11 + 11 + 10 + 13).
// No notes PDF exists for Unit IV in the MARKETING folder: written from standard marketing textbooks (Kotler & Keller; Saxena) - marked [extra].
(function () {
  const SUB = window.SUBJECTS && window.SUBJECTS.marketing;
  if (!SUB) return;
  const T = (head, rows) => '<table><tr>' + head.map((h) => '<th>' + h + '</th>').join('') + '</tr>' + rows.map((r) => '<tr>' + r.map((c) => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</table>';
  const UL = (...a) => '<ul>' + a.map((x) => '<li>' + x + '</li>').join('') + '</ul>';
  const OL = (...a) => '<ol>' + a.map((x) => '<li>' + x + '</li>').join('') + '</ol>';
  const BOX = (t, ...a) => '<div class="box"><b>' + t + '</b>' + UL(...a) + '</div>';
  const MN = (x) => '<div class="box"><b>Mnemonic:</b> ' + x + '</div>';
  const FLOW = (...a) => '<div class="box"><b>Flow:</b> ' + a.join(' &rarr; ') + '</div>';
  const NOTE = '<p class="expl">[extra] No notes PDF for Unit IV in your MARKETING folder - this page follows the syllabus topics and standard textbooks (Kotler &amp; Keller; Saxena). Check against your class notes.</p>';

  const P = `
<div class="box"><b>Syllabus - Unit IV (13 lectures) - Marketing Mix (4Ps):</b> Product - product mix, NPD, PLC, branding &amp; packaging. Price - pricing methods, adapting &amp; discriminating price. Place - distribution channels, types &amp; logistics. Promotion - promotion mix tools (advertising, personal selling, sales promotion, PR, digital media).</div>
${NOTE}
<h2>1. The marketing mix</h2>
<p>The <b>marketing mix</b> is the set of controllable tools a firm blends to produce the response it wants in the target market (E. Jerome McCarthy: the 4Ps; Kotler). Its aim is to deliver value to the chosen segment (STP) and to build a profitable customer relationship.</p>
${T(['P', 'Customer view (4Cs)', 'Decisions'], [['Product', 'Customer solution / value', 'Variety, quality, design, features, brand name, packaging, services'], ['Price', 'Customer cost', 'List price, discounts, payment terms, credit'], ['Place', 'Convenience', 'Channels, coverage, assortment, locations, inventory, logistics'], ['Promotion', 'Communication', 'Advertising, personal selling, sales promotion, PR, direct / digital']])}
${MN('<b>4Ps</b> = Product, Price, Place, Promotion. Services add People, Process, Physical evidence (7Ps).')}
<h2>2. Product - meaning and levels</h2>
<p>A <b>product</b> is anything that can be offered to a market to satisfy a want or need - goods, services, experiences, persons, places, ideas.</p>
${T(['Level', 'Meaning', 'Example (smartphone)'], [['Core benefit', 'Basic need satisfied', 'Communication'], ['Actual (generic) product', 'Features, quality, design, brand, packaging', 'Model, camera, display, brand'], ['Augmented product', 'Extra services and benefits', 'Warranty, after-sales service, free delivery, easy EMI']])}
<h3>Classification</h3>
${T(['Consumer goods', 'Industrial goods'], [['Convenience (bread, soap), shopping (clothes, phone), specialty (luxury watch), unsought (insurance)', 'Raw materials, capital goods (machinery), supplies and services']])}
<h2>3. Product mix</h2>
<p>The <b>product mix</b> (assortment) is the set of all products and items a seller offers. A <b>product line</b> is a group of closely related products.</p>
${T(['Dimension', 'Meaning', 'Example (FMCG company)'], [['Width', 'Number of different product lines', 'Soaps, detergents, shampoos, foods = 4 lines'], ['Length', 'Total number of items in all lines', 'All variants of all lines'], ['Depth', 'Number of versions of each product', 'Shampoo in 3 sizes x 4 variants'], ['Consistency', 'How closely the lines are related', 'All sold through the same channels']])}
<h2>4. New product development (NPD)</h2>
${FLOW('Idea generation', 'Idea screening', 'Concept development &amp; testing', 'Marketing strategy', 'Business (commercial) analysis', 'Product development', 'Test marketing', 'Commercialisation')}
${UL('<b>Idea generation</b> - customers, employees, R&amp;D, competitors.', '<b>Screening</b> - drop poor ideas early (GO / DROP).', '<b>Concept testing</b> - test the idea with target customers.', '<b>Business analysis</b> - sales, cost and profit forecasts.', '<b>Product development</b> - prototype and technical tests.', '<b>Test marketing</b> - limited launch in a selected market.', '<b>Commercialisation</b> - full launch: when, where, to whom, how.')}
<p>Many new products fail because of poor market research, wrong timing, high cost or weak promotion.</p>
<h2>5. Product life cycle (PLC)</h2>
${T(['Stage', 'Sales / profit', 'Features', 'Marketing strategy'], [['Introduction', 'Low sales, losses', 'Few competitors, high promotion cost', 'Create awareness; skimming or penetration pricing; limited distribution'], ['Growth', 'Rapid sales rise, profits grow', 'Competitors enter, acceptance increases', 'Improve quality, add features, widen distribution, build brand preference'], ['Maturity', 'Sales peak, profit highest then falls', 'Intense competition, price cutting', 'Modify market / product / marketing mix; defend share'], ['Decline', 'Sales and profit fall', 'Changing tastes, new technology', 'Harvest, divest or drop; reduce cost']])}
<h2>6. Branding</h2>
<p>A <b>brand</b> is a name, term, sign, symbol or design (or a combination) that identifies the goods or services of one seller and differentiates them from competitors.</p>
${UL('<b>Brand name</b> - the part that can be spoken (Nike).', '<b>Brand mark</b> - the symbol or design (the swoosh).', '<b>Trademark</b> - the legally protected brand or part of it.', '<b>Brand equity</b> - the value a brand adds to the product (awareness, loyalty, perceived quality, associations).')}
<p><b>Features of a good brand name:</b> short, easy to pronounce and remember, suggests product benefits, distinctive, legally registrable, suits all markets.</p>
${T(['Brand strategy', 'Meaning', 'Example'], [['Line extension', 'New variants in the same category under the same brand', 'New flavour of a biscuit'], ['Brand extension', 'Existing brand used in a new category', 'Brand of soaps launching shampoo'], ['Multi-brand', 'Several brands in the same category', 'Different detergent brands of one firm'], ['Private (store) brand', 'Brand owned by the retailer', 'Retail chain\'s own label']])}
<h2>7. Packaging and labelling</h2>
${UL('<b>Primary</b> package - holds the product (tube of toothpaste). <b>Secondary</b> - outer box. <b>Tertiary</b> - bulk shipping cartons.')}
<p><b>Functions:</b> protection, containment, convenience, identification and promotion (the silent salesman), information, safety and tamper-resistance, brand image.</p>
<p><b>Labelling:</b> printed information on the package - brand, ingredients, price (MRP), net quantity, manufacturing / expiry date, usage and warnings; it supports consumer information and the law.</p>
${BOX('Quick revision - Product', 'Three levels: core, actual, augmented', 'Mix: width, length, depth, consistency', 'NPD: 8 stages (idea to commercialisation)', 'PLC: introduction, growth, maturity, decline', 'Brand name, brand mark, trademark, brand equity', 'Packaging: primary, secondary, tertiary')}`;

  const PR = `
${NOTE}
<h2>1. Price - meaning and importance</h2>
<p><b>Price</b> is the amount of money charged for a product or service, or the sum of the values customers exchange for the benefit of having or using it. It is the only element of the mix that produces <b>revenue</b>; all others are costs. Price also signals quality and positions the brand.</p>
<h3>Factors affecting pricing</h3>
${T(['Internal factors', 'External factors'], [['Marketing objectives, cost of production, marketing-mix strategy, organisation, product life-cycle stage', 'Demand and customer perception, competition, economic conditions, government regulations, channel members']])}
<h3>Pricing objectives</h3>
${UL('Survival (in a tough market)', 'Profit maximisation / target return', 'Market share leadership', 'Product-quality leadership', 'Cash recovery')}
<h2>2. Pricing methods</h2>
${T(['Approach', 'Method', 'How it works'], [['Cost-based', 'Cost-plus (mark-up) pricing', 'Price = cost + a fixed percentage mark-up'], ['Cost-based', 'Target-return pricing', 'Price set to earn a target return on investment'], ['Cost-based', 'Break-even pricing', 'Price at which total revenue equals total cost'], ['Demand-based', 'Perceived-value pricing', 'Price according to what customers believe the product is worth'], ['Demand-based', 'Demand differentials', 'Different prices for different segments, times, places'], ['Competition-based', 'Going-rate pricing', 'Price at or near competitors\' prices'], ['Competition-based', 'Sealed-bid pricing', 'Price quoted in tenders based on expected competitor bids']])}
<div class="box"><b>Example (cost-plus):</b> unit cost Rs 80 and mark-up 25% → price = 80 + (25% of 80) = <b>Rs 100</b>. <b>Break-even units</b> = fixed cost / (price - variable cost per unit).</div>
<h2>3. Pricing strategies for new products</h2>
${T(['', 'Market skimming', 'Market penetration'], [['Meaning', 'High initial price, lowered later', 'Low initial price to win market share fast'], ['Suitable when', 'Product is new and unique; image of quality; buyers willing to pay', 'Market is price-sensitive; competition will enter quickly; economies of scale'], ['Example', 'New gadget at a premium price', 'Telecom data plans at very low prices']])}
<h2>4. Adapting prices</h2>
${T(['Strategy', 'Meaning', 'Example'], [['Psychological pricing', 'Prices that appeal to emotions', 'Rs 999 instead of Rs 1,000'], ['Promotional pricing', 'Temporary price cuts to boost sales', 'Festival sale, loss leader'], ['Geographical pricing', 'Price depends on location / transport', 'Delivery charges, zone pricing'], ['Discounts and allowances', 'Cash, quantity, seasonal, trade discounts', '2% cash discount for early payment'], ['Product-mix pricing', 'Pricing across a line or bundle', 'Price lining, bundle pricing, optional-product pricing']])}
<h2>5. Price discrimination (discriminating price)</h2>
<p><b>Price discrimination</b> means charging different prices to different customers (or in different markets) for the same product, not justified by differences in cost.</p>
${T(['Basis', 'Example'], [['By customer segment', 'Student, senior-citizen or member discounts'], ['By time', 'Peak and off-peak fares; early-bird tickets'], ['By place', 'Different prices in different cities or countries'], ['By product version', 'Economy vs premium seats; basic vs pro software']])}
<p><b>Conditions:</b> the market can be separated into segments, customers cannot easily resell, and the segments have different price sensitivity. <b>Degrees:</b> first (each customer pays the maximum they will), second (quantity-based), third (group-based).</p>
${BOX('Quick revision - Price', 'Methods: cost-based, demand-based, competition-based', 'Skimming = high first, penetration = low first', 'Adapting: psychological, promotional, geographical, discounts, product-mix', 'Price discrimination = different prices, same product, different customers')}`;

  const PL = `
${NOTE}
<h2>1. Place (distribution) - meaning</h2>
<p><b>Place</b> covers all activities that make the product available to the target customers at the right <b>time, place and quantity</b>: distribution channels, coverage, assortment, locations, inventory, transport and logistics.</p>
<h2>2. Distribution channels - levels</h2>
${T(['Channel', 'Path', 'Example'], [['Zero-level (direct)', 'Manufacturer → Consumer', 'Door-to-door, own online store, factory outlet'], ['One-level', 'Manufacturer → Retailer → Consumer', 'Car showroom, apparel brand stores'], ['Two-level', 'Manufacturer → Wholesaler → Retailer → Consumer', 'Fast-moving consumer goods'], ['Three-level', 'Manufacturer → Agent → Wholesaler → Retailer → Consumer', 'Goods sold in distant markets']])}
${T(['Type of intermediary', 'Role'], [['Wholesaler', 'Buys in bulk, stores, breaks bulk and sells to retailers'], ['Retailer', 'Sells to the final consumer in small quantities'], ['Agent / broker', 'Brings buyers and sellers together for a commission'], ['Distributor / dealer', 'Handles distribution for a particular manufacturer']])}
<h3>Functions of channels</h3>
${UL('Make goods available (time and place utility); break bulk; carry stock; finance and risk-bearing; information and promotion; after-sales service.')}
<h2>3. Channel decisions</h2>
${T(['Strategy', 'Meaning', 'Used for'], [['Intensive distribution', 'Product in as many outlets as possible', 'Convenience goods (soap, snacks)'], ['Selective distribution', 'A limited number of chosen outlets', 'Shopping goods (appliances)'], ['Exclusive distribution', 'Only one outlet in a territory', 'Luxury goods, cars']])}
<p><b>Factors affecting channel choice:</b> nature of product (perishable, bulky, technical), market (number and location of customers), manufacturer's resources and control wanted, competition, cost of channel, legal rules. In modern marketing, <b>omni-channel</b> and online marketplaces combine physical and digital channels.</p>
<h2>4. Logistics (physical distribution)</h2>
<p><b>Logistics</b> is the planning, implementing and controlling of the physical flow of materials and finished goods from point of origin to point of use, to meet customer needs at a profit.</p>
${T(['Element', 'Role'], [['Order processing', 'Receive, check and execute customer orders quickly and accurately'], ['Warehousing', 'Storing goods; storage and distribution centres'], ['Inventory management', 'Keep the right stock - avoid shortage and excess'], ['Transportation', 'Move goods by road, rail, air, sea - cost, speed, safety'], ['Packaging and materials handling', 'Protect goods in transit; loading and unloading']])}
<p><b>Objective:</b> the right goods, at the right place and time, in the right condition and at the lowest total cost. <b>Importance:</b> customer satisfaction, cost saving, competitive advantage. Supply chain management (SCM) coordinates the whole chain from suppliers to customers.</p>
${BOX('Quick revision - Place', 'Channels: zero, one, two, three level', 'Intermediaries: wholesaler, retailer, agent, distributor', 'Intensive, selective, exclusive distribution', 'Logistics: order processing, warehousing, inventory, transport, handling')}`;

  const PM = `
${NOTE}
<h2>1. Promotion - meaning</h2>
<p><b>Promotion</b> is the marketing communication that informs, persuades and reminds target customers about the product and the company. The combination of promotional tools is the <b>promotion mix</b>.</p>
<h3>Objectives</h3>
${UL('Create awareness and interest', 'Build brand image and preference', 'Persuade customers to buy / retain customers', 'Counter competition', 'Support the launch of a new product')}
${MN('<b>AIDA</b> = Attention → Interest → Desire → Action (what good promotion achieves).')}
<h2>2. Promotion mix tools</h2>
${T(['Tool', 'Meaning', 'Merits', 'Limitations'], [['Advertising', 'Paid, non-personal presentation of ideas, goods or services by an identified sponsor (TV, print, radio, outdoor, online)', 'Wide reach, repeated message, builds image', 'Costly, impersonal, no instant feedback'], ['Personal selling', 'Face-to-face presentation by a salesperson to make a sale', 'Two-way, flexible, builds relationship, immediate feedback', 'High cost per contact, limited reach'], ['Sales promotion', 'Short-term incentives to encourage purchase', 'Quick sales effect, attracts trial', 'Short lived; may reduce brand image'], ['Public relations (PR)', 'Building good relations with the public through press releases, events, sponsorship and CSR', 'High credibility, low cost', 'Little control over media'], ['Digital media / direct marketing', 'Online and direct channels - search, social, email, influencers, SMS', 'Targeted, measurable, interactive, low cost', 'Clutter; needs data and skills']])}
<h2>3. Advertising - decisions</h2>
${FLOW('Set objectives', 'Budget', 'Message (copy)', 'Media selection', 'Evaluate results')}
${UL('<b>Media:</b> television, newspapers and magazines, radio, outdoor (hoardings), cinema, internet and mobile.', '<b>Evaluating:</b> sales effect, recall tests, reach and frequency.')}
<h2>4. Personal selling - steps</h2>
${FLOW('Prospecting', 'Pre-approach', 'Approach', 'Presentation and demonstration', 'Handling objections', 'Closing', 'Follow-up')}
<h2>5. Sales promotion</h2>
${T(['Consumer promotion', 'Trade promotion'], [['Free samples, coupons, price-off, premiums (gifts), contests and lotteries, cash refunds, loyalty points', 'Trade discounts, display allowances, dealer contests, free goods, push money, training of sales staff']])}
<h2>6. Public relations</h2>
<p>Tools: press releases, press conferences, events, product publicity, sponsorship, corporate social responsibility (CSR), annual reports and crisis communication. PR builds trust and a good corporate image at low cost.</p>
<h2>7. Digital media</h2>
${UL('<b>Search engine marketing</b> (SEO, pay-per-click), <b>social media marketing</b>, <b>email and SMS</b>, <b>content and video</b>, <b>influencer</b> and <b>affiliate marketing</b>.', 'Benefits: precise targeting, measurable (CTR, conversions), interactive, low entry cost.')}
<h2>8. Push vs pull strategy</h2>
${T(['Push strategy', 'Pull strategy'], [['Promotion aimed at channel members (trade offers, personal selling) to push the product through', 'Promotion aimed at final consumers (advertising, consumer offers) so that they demand the product from retailers']])}
<p><b>Factors affecting the promotion mix:</b> type of product, stage of the PLC, target market, budget, push / pull strategy, competitors' promotion.</p>
${BOX('Quick revision - Promotion', 'Mix: advertising, personal selling, sales promotion, PR, digital / direct', 'AIDA', 'Selling steps: 7 (prospecting to follow-up)', 'Push (to the channel) vs pull (to the consumer)')}`;

  const EM = `
<div class="box"><b>Exam format (from the syllabus image):</b> Course F010303TN · Core Course III · Credits 4 · Max marks 25 (internal) + 75 (external) · Min pass 10 + 25 · L-2 T-0 P-0 · 45 lectures: Unit I 11 · Unit II 11 · Unit III 10 · Unit IV 13. <b>Date:</b> Thu 26 Nov 2026, 11:30 AM - 1:30 PM (written, 2 hours).</div>
<div class="box"><b>Course outcomes:</b> (CO1) explain core marketing concepts and management philosophies; (CO2) analyse consumer behaviour and apply marketing research tools; (CO3) develop segmentation, targeting and positioning strategies; (CO4) design an integrated marketing mix for a product or service.</div>
<h2>1. How to write a good answer</h2>
${T(['Marks', 'Structure'], [['2-3', 'Definition → 3-4 points → one concluding line'], ['5-6', 'Definition → intro → table / flowchart → 5-6 explained points → conclusion'], ['Long answer', 'Headings, a table or diagram, a real brand example (Nike, Amul, Jio, Fevicol), conclusion']])}
<p>Use Indian brand examples - they earn marks. Draw the PLC curve, the channel levels and the NPD flow.</p>
<h2>2. Syllabus map - what to master</h2>
${T(['Unit', 'Topics'], [['I (11)', 'Definition, nature, scope, importance; core concepts; orientations (production, product, selling, marketing, societal); digital and green marketing'], ['II (11)', 'Consumer behaviour: concept, importance, factors (cultural, social, personal, psychological); MIS: meaning, importance, scope; marketing research: process, tools, importance'], ['III (10)', 'Segmentation (concept, bases, importance); targeting (types, strategies); positioning, brand positioning and repositioning; value proposition'], ['IV (13)', 'Product (mix, NPD, PLC, branding, packaging); price (methods, adapting, discriminating); place (channels, types, logistics); promotion (advertising, personal selling, sales promotion, PR, digital media)']])}
<h2>3. Mnemonic bank</h2>
${T(['Mnemonic', 'Recall'], [['4Ps', 'Product, Price, Place, Promotion'], ['STP', 'Segmentation, Targeting, Positioning'], ['G-D-P-B', 'Segmentation bases: Geographic, Demographic, Psychographic, Behavioural'], ['P-P-S-M-S', 'Orientations: Production, Product, Selling, Marketing, Societal'], ['C-S-P-P', 'Consumer behaviour factors: Cultural, Social, Personal, Psychological'], ['IGS-CD-MBD-TC', 'NPD: Idea, Screening, Concept, Marketing strategy, Business analysis, Development, Test market, Commercialisation'], ['I-G-M-D', 'PLC: Introduction, Growth, Maturity, Decline'], ['AIDA', 'Attention, Interest, Desire, Action'], ['W-L-D-C', 'Product mix: Width, Length, Depth, Consistency']])}
<h2>4. Flowcharts to reproduce</h2>
${FLOW('Idea generation', 'Screening', 'Concept testing', 'Strategy', 'Business analysis', 'Development', 'Test marketing', 'Launch')}
${FLOW('Introduction', 'Growth', 'Maturity', 'Decline')}
${FLOW('Manufacturer', 'Wholesaler', 'Retailer', 'Consumer')}
${FLOW('Prospecting', 'Pre-approach', 'Approach', 'Presentation', 'Objections', 'Closing', 'Follow-up')}
<h2>5. Last-night plan</h2>
${T(['Time', 'What to do'], [['Block 1 - 45 min', 'Unit I: definitions, core concepts, five orientations, green and digital marketing'], ['Block 2 - 45 min', 'Unit II: consumer behaviour factors and buying process, MIS, research process'], ['Block 3 - 45 min', 'Unit III: STP, bases, targeting strategies, positioning, repositioning, value proposition'], ['Block 4 - 60 min', 'Unit IV: product mix, NPD, PLC, pricing methods, channels, promotion mix'], ['Final 15 min', 'Write 3 answers from memory with a table and an example']])}
<p><b>Golden rule:</b> cover every unit - mnemonics, tables and one example per answer. Do not start new topics in the last hours.</p>`;

  const pages = [
    { id: 'u4-product', title: 'Unit IV-A · Product (mix, NPD, PLC, branding, packaging)', html: P },
    { id: 'u4-price', title: 'Unit IV-B · Price (methods, adapting, discriminating)', html: PR },
    { id: 'u4-place', title: 'Unit IV-C · Place (channels, types, logistics)', html: PL },
    { id: 'u4-promo', title: 'Unit IV-D · Promotion (mix, advertising, selling, PR, digital)', html: PM },
    { id: 'exam-master', title: '⭐ Exam Master - syllabus map, mnemonics, flowcharts, last-night plan', html: EM },
  ];
  const link = (n) => `<div class="nextsteps"><span>Next steps${n ? ' - ' + n : ''}</span><a class="nbtn" href="#/marketing/qa">✍️ Detailed written answers</a><a class="nbtn" href="#/marketing/quiz">▶ Practise MCQs</a><a class="nbtn" href="#/expected/marketing">🎯 Important questions</a></div>`;
  pages.forEach((u, i) => { u.html += link(i < 4 ? ['Product', 'Price', 'Place', 'Promotion'][i] : ''); });
  const at = SUB.units.findIndex((u) => u.id === 'assign');
  if (at >= 0) SUB.units.splice(at, 0, ...pages); else SUB.units.push(...pages);
  SUB.u4notes = pages;
})();
