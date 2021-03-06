{
	"translatorID": "98ad3ad1-9d43-4b2e-bc36-172cbf00ba1d",
	"label": "eLife",
	"creator": "Aurimas Vinckevicius",
	"target": "https?://elife.elifesciences.org/(?:content/|elife/search\\?|category/|browse)",
	"minVersion": "4.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 4,
	"browserSupport": "gcsv",
	"lastUpdated": "2013-05-19 06:11:57"
}

function detectWeb(doc, url) {
	if(getSearchResults(doc).length) {
		return "multiple";
	}
	
	return "journalArticle";
}

function getSearchResults(doc) {
	return ZU.xpath(doc, '//div[@class="elife-searchlist-results"]//article//cite/a');
}

function doWeb(doc, url) {
	if(detectWeb(doc, url) == "multiple") {
		var searchResults = getSearchResults(doc);
		var items = {};
		for(var i=0, n=searchResults.length; i<n; i++) {
			items[searchResults[i].href] = searchResults[i].textContent;
		}
		
		Z.selectItems(items, function(selectedItems) {
			if(!selectedItems) return true;
			
			var urls = [];
			for(var i in selectedItems) {
				urls.push(i);
			}
			ZU.processDocuments(urls, scrape);
		})
	} else {
		scrape(doc, url);
	}
}

function scrape(doc, url) {
	var translator = Zotero.loadTranslator("web");
	//Embedded Metadata
	translator.setTranslator("951c027d-74ac-47d4-a107-9c3069ab7b48");
	translator.setDocument(doc);
	translator.setHandler("itemDone", function(obj, item) {
		if(item.extra) {
			if(!item.abstractNote) item.abstractNote = item.extra;
			
			delete item.extra;
		}
		item.complete();
	});
	translator.getTranslatorObject(function(trans) {
		trans.itemType = 'journalArticle';
		trans.doWeb(doc, url);
	});
}/** BEGIN TEST CASES **/
var testCases = [
	{
		"type": "web",
		"url": "http://elife.elifesciences.org/content/2/e00799",
		"items": [
			{
				"itemType": "journalArticle",
				"creators": [
					{
						"firstName": "Randy",
						"lastName": "Schekman",
						"creatorType": "author"
					},
					{
						"firstName": "Fiona",
						"lastName": "Watt",
						"creatorType": "author"
					},
					{
						"firstName": "Detlef",
						"lastName": "Weigel",
						"creatorType": "author"
					}
				],
				"notes": [],
				"tags": [
					"eLife",
					"peer review",
					"publishing",
					"scientific publishing"
				],
				"seeAlso": [],
				"attachments": [
					{
						"title": "Full Text PDF",
						"mimeType": "application/pdf"
					},
					{
						"title": "Snapshot"
					},
					{
						"title": "PubMed entry",
						"mimeType": "text/html",
						"snapshot": false
					}
				],
				"itemID": "http://elife.elifesciences.org/content/2/e00799",
				"rights": "Copyright © 2013, Schekman et al. This article is distributed under the terms of the Creative Commons Attribution License, which permits unrestricted use and redistribution provided that the original author and source are credited.",
				"DOI": "10.7554/eLife.00799",
				"url": "http://elife.elifesciences.org/content/2/e00799",
				"language": "en",
				"libraryCatalog": "elife.elifesciences.org",
				"abstractNote": "All editorial decisions at eLife are taken by working scientists in a process that emphasizes fairness, speed and transparency.\nPMID: 23638304",
				"title": "The eLife approach to peer review",
				"publicationTitle": "eLife",
				"date": "04/30/2013",
				"volume": "2"
			}
		]
	},
	{
		"type": "web",
		"url": "http://elife.elifesciences.org/content/2/e00767",
		"items": [
			{
				"itemType": "journalArticle",
				"creators": [
					{
						"firstName": "Panisadee",
						"lastName": "Avirutnan",
						"creatorType": "author"
					},
					{
						"firstName": "Ponpan",
						"lastName": "Matangkasombut",
						"creatorType": "author"
					}
				],
				"notes": [],
				"tags": [
					"Human",
					"Mouse",
					"Viruses",
					"chymase",
					"dengue virus",
					"infectious disease",
					"leukotrienes",
					"mast cell",
					"vascular leakage"
				],
				"seeAlso": [
					"10.7554/eLife.00481"
				],
				"attachments": [
					{
						"title": "Full Text PDF",
						"mimeType": "application/pdf"
					},
					{
						"title": "Snapshot"
					},
					{
						"title": "PubMed entry",
						"mimeType": "text/html",
						"snapshot": false
					}
				],
				"itemID": "http://elife.elifesciences.org/content/2/e00767",
				"rights": "Copyright © 2013, Avirutnan and Matangkasombut. This article is distributed under the terms of the Creative Commons Attribution License, which permits unrestricted use and redistribution provided that the original author and source are credited.",
				"DOI": "10.7554/eLife.00767",
				"url": "http://elife.elifesciences.org/content/2/e00767",
				"language": "en",
				"libraryCatalog": "elife.elifesciences.org",
				"abstractNote": "Immune cells called mast cells can hinder rather than help the body's response to dengue virus, which suggests that mast cell products could be used as biomarkers to identify severe forms of the disease.\nPMID: 23638302",
				"title": "Unmasking the role of mast cells in dengue",
				"publicationTitle": "eLife",
				"date": "04/30/2013",
				"volume": "2"
			}
		]
	},
	{
		"type": "web",
		"url": "http://elife.elifesciences.org/content/2/e00473",
		"items": [
			{
				"itemType": "journalArticle",
				"creators": [
					{
						"firstName": "Polly Yingshan",
						"lastName": "Hsu",
						"creatorType": "author"
					},
					{
						"firstName": "Upendra K.",
						"lastName": "Devisetty",
						"creatorType": "author"
					},
					{
						"firstName": "Stacey L.",
						"lastName": "Harmer",
						"creatorType": "author"
					}
				],
				"notes": [],
				"tags": [
					"Arabidopsis",
					"circadian rhythm",
					"evening element",
					"phase",
					"transcription factors"
				],
				"seeAlso": [
					"10.7554/eLife.00791"
				],
				"attachments": [
					{
						"title": "Full Text PDF",
						"mimeType": "application/pdf"
					},
					{
						"title": "Snapshot"
					}
				],
				"itemID": "http://elife.elifesciences.org/content/2/e00473",
				"rights": "Copyright © 2013, Hsu et al. This article is distributed under the terms of the Creative Commons Attribution License, which permits unrestricted use and redistribution provided that the original author and source are credited.",
				"DOI": "10.7554/eLife.00473",
				"url": "http://elife.elifesciences.org/content/2/e00473",
				"language": "en",
				"libraryCatalog": "elife.elifesciences.org",
				"abstractNote": "We live in a world with a 24-hr cycle in which day follows night follows day with complete predictability. Life on earth has evolved to take advantage of this predictability by using circadian clocks to prepare for the coming of night (or day), and plants are no exception. Even in constant darkness, characteristics such as leaf movements show a constant cycle of around 24 hr.\n\nMost circadian clocks rely on negative feedback loops involving various genes and proteins to keep track of time. In one of these feedback loops, certain genes—called morning-phased genes—are expressed as proteins during the day, and these proteins prevent other genes—called evening-phased genes—from producing proteins. As night approaches, however, a second feedback loop acts to stop the morning-phased genes being expressed, thus allowing the evening-phased genes to produce proteins. And as day approaches, expression of these genes is stopped and the whole cycle starts again.\n\nMany of the genes and proteins involved in the circadian system of Arabidopsis thaliana , a small flowering plant that is widely used as a model organism, have been identified, and its circadian clock was thought to rely almost entirely on proteins called repressors that block the transcription of genes. Now, Hsu et al. have shown that the Arabidopsis clock also involves proteins that increase the expression of certain genes at specific times of the day.\n\nHsu et al. focused on the promoter regions of evening-phased genes: these regions are stretches of DNA that proteins called transcription factors bind to and either encourage the expression of a gene (if the protein is a transcriptional activator) or block its expression (as a transcriptional repressor). In particular, they focused on a protein called RVE8 that is most strongly expressed in the afternoon and, based on previous research, is thought to activate the transcription of genes. Using genetically modified plants in which the gene for RVE8 can be turned on and off, they found that this protein led to increases in the expression of some genes, and reductions in the expression of others.\n\nFurther analysis showed that RVE8 was able to activate the expression of evening-phased genes directly, without requiring that new proteins be made first. By contrast, morning-expressed genes were likely to be suppressed by RVE8 via an indirect mechanism that involved other proteins that had previously been activated by RVE8. The expression of RVE8 itself is regulated by other clock genes and also by an undefined post-transcriptional process. Therefore rather than consisting of a morning feedback loop coupled to an evening feedback loop, with both loops being based on repressors, the plant clock is instead better viewed as a highly connected network of activators and repressors. Further research is clearly necessary to understand this unexpected complexity in the circadian clock of Arabidopsis.\n\nDOI: [http://dx.doi.org/10.7554/eLife.00473.002][1]\n\n [1]: /lookup/doi/10.7554/eLife.00473.002",
				"title": "Accurate timekeeping is controlled by a cycling activator in Arabidopsis",
				"publicationTitle": "eLife",
				"date": "04/30/2013",
				"volume": "2"
			}
		]
	},
	{
		"type": "web",
		"url": "http://elife.elifesciences.org/content/2/e00639",
		"items": [
			{
				"itemType": "journalArticle",
				"creators": [
					{
						"firstName": "William R.",
						"lastName": "Bishai",
						"creatorType": "author"
					}
				],
				"notes": [],
				"tags": [
					"HIV",
					"K-RITH",
					"South Africa",
					"TB",
					"drug resistance",
					"epidemic"
				],
				"seeAlso": [],
				"attachments": [
					{
						"title": "Full Text PDF",
						"mimeType": "application/pdf"
					},
					{
						"title": "Snapshot"
					},
					{
						"title": "PubMed entry",
						"mimeType": "text/html",
						"snapshot": false
					}
				],
				"itemID": "http://elife.elifesciences.org/content/2/e00639",
				"rights": "Copyright © 2013, Bishai. This article is distributed under the terms of the Creative Commons Attribution License, which permits unrestricted use and redistribution provided that the original author and source are credited.",
				"DOI": "10.7554/eLife.00639",
				"url": "http://elife.elifesciences.org/content/2/e00639",
				"language": "en",
				"libraryCatalog": "elife.elifesciences.org",
				"abstractNote": "William R Bishai , director of the KwaZulu-Natal Research Institute for Tuberculosis and HIV (K-RITH), argues that the best place to carry out research into a disease is in its midst.\nPMID: 23577235",
				"title": "Basic research at the epicenter of an epidemic",
				"publicationTitle": "eLife",
				"date": "04/02/2013",
				"volume": "2"
			}
		]
	},
	{
		"type": "web",
		"url": "http://elife.elifesciences.org/content/2/e00565",
		"items": [
			{
				"itemType": "journalArticle",
				"creators": [
					{
						"firstName": "César S.",
						"lastName": "Mendes",
						"creatorType": "author"
					},
					{
						"firstName": "Imre",
						"lastName": "Bartos",
						"creatorType": "author"
					},
					{
						"firstName": "Turgay",
						"lastName": "Akay",
						"creatorType": "author"
					},
					{
						"firstName": "Szabolcs",
						"lastName": "Márka",
						"creatorType": "author"
					},
					{
						"firstName": "Richard S.",
						"lastName": "Mann",
						"creatorType": "author"
					}
				],
				"notes": [],
				"tags": [
					"D. melanogaster",
					"coordination",
					"gait analysis",
					"motor neuron",
					"proprioception",
					"sensory feedback",
					"walking behavior"
				],
				"seeAlso": [
					"10.7554/eLife.00231"
				],
				"attachments": [
					{
						"title": "Full Text PDF",
						"mimeType": "application/pdf"
					},
					{
						"title": "Snapshot"
					},
					{
						"title": "PubMed entry",
						"mimeType": "text/html",
						"snapshot": false
					}
				],
				"itemID": "http://elife.elifesciences.org/content/2/e00565",
				"rights": "Copyright © 2013, Mendes et al. This article is distributed under the terms of the Creative Commons Attribution License, which permits unrestricted use and redistribution provided that the original author and source are credited.",
				"DOI": "10.7554/eLife.00565",
				"url": "http://elife.elifesciences.org/content/2/e00565",
				"language": "en",
				"libraryCatalog": "elife.elifesciences.org",
				"abstractNote": "Mendes CS, Bartos I, Akay T, Márka S, Mann RS. 2013. Quantification of gait parameters in freely walking wild type and sensory deprived Drosophila melanogaster . eLife 2 :e00231. doi: <http://dx.doi.org/10.7554/eLife.00231>. Published 8 January 2013\n\nIn the first sentence of the abstract, ‘multi-legged in vertebrates’ has been corrected to ‘multi-legged invertebrates’.\n\nIn the vertical axis of Figure 7, panel B, ‘Step lenght’ has been corrected to ‘Step length’.\n\nThe article has been corrected accordingly.\nPMID: 23408481",
				"shortTitle": "Correction",
				"title": "Correction: Quantification of gait parameters in freely walking wild type and sensory deprived Drosophila melanogaster",
				"publicationTitle": "eLife",
				"date": "02/11/2013",
				"volume": "2"
			}
		]
	}
]
/** END TEST CASES **/