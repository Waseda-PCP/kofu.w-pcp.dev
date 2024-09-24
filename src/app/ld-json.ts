type jsonLDType = {
	"@context": "http://schema.org",
	"@type": string,
	[key: string]: any
}[];

const for2024: jsonLDType = [

	{
		"@context": "http://schema.org",
		"@type": "Dataset",
		"name": "2024年度 興風祭 / Kofu Festival 2024",
		"description": "Kofu Festival 2024 is (was) a festival held by Waseda Junior and Senior High School in 2024.\n"
			+ "This festival will be (was) held on September 28th and 29th, 2024.\n",
		"url": "https://kofu.w-pcp.dev/2024",
		"publisher": {
			"@type": "Organization",
			"name": "Waseda Personal Computer Programming Club of Waseda Junior and Senior High School (W-PCP)",
		},
		"creator": {
			"@type": "Organization",
			"name": "Waseda Junior and Senior High School",
		},
		"license": "https://creativecommons.org/publicdomain/zero/1.0/",
	},
	{
		"@context": "http://schema.org",
		"@type": "FAQPage",
		"mainEntity": [
			{
				"@type": "Question",
				"name": "ダウンロードページはどこにありますか？",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "<p>ダウンロードページは<a href='https://kofu.w-pcp.dev/2024/download'>こちら</a>です。</p>"
				},
			}
		],
	},
	{
		"@context": "http://schema.org",
		"@type": "Event",
		"name": "2024年度 興風祭 / Kofu Festival 2024",
		"startDate": "2024-09-28T00:09:00+09:00",
		"endDate": "2024-09-29T00:16:00+09:00",
		"eventStatus": "https://schema.org/EventScheduled",
		"eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
		"location": {
			"@type": "Place",
			"name": "Waseda Junior and Senior High School",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Shinjuku",
				"addressRegion": "Tokyo",
				"postalCode": "162-8654",
				"streetAddress": "東京都新宿区馬場下町 62番地",
				"addressCountry": "JP",
			},
		},
		"description": "興風祭は、早稲田大学附属早稲田中学校・高等学校が主催する文化祭です。\n"
			+ "興風祭は、毎年9月下旬に開催されます。\n"
			+ "2024年度は、9月28日（土）と9月29日（日）に 9:00 ~ 16:00 に開催されます。",
		"organizer": {
			"@type": "Organization",
			"name": "早稲田中学校・高等学校",
			"url": "https://www.waseda-h.ed.jp",
		},
	},
];

const jsonLDs: jsonLDType = [
	{
		"@context": "http://schema.org",
		"@type": "ItemList",
		"itemListElement": [
			{
				"@type": "ListItem",
				"position": 1,
				"url": "https://kofu.w-pcp.dev/2024/download"
			},
		],
	},
	{
		"@context": "http://schema.org",
		"@type": "Organization",
		"image": "https://kofu.w-pcp.dev/chusan.png",
		"name": "早稲田中学校・高等学校 PCプログラミング部 (W-PCP)",
		"description": "早稲田中学校・高等学校 PCプログラミング部（W-PCP）は、早稲田中学校・高等学校の公式部活動です。",
	},
	...for2024,
];

export default jsonLDs;
