export default 
`{
	"block": "layout",
	"content":
	{
		"block": "layout",
		"elem": "container",
		"elemMods":
		{
			"size": "m",
			"align": "center",
			"space-v": "xxxxl",
			"indent-b": "xxl"
		},
		"content":
		{
			"block": "grid",
			"mods":
			{
				"m-columns": "10",
				"col-gap": "two-thirds",
				"row-gap": "half"
			},
			"content":
			[
                {
                    "block": "grid",
                    "elem": "fraction",
                    "elemMods":
                    {
                        "m-col": "4"
                    },
                    "content":
                    {
                        "block": "card",
                        "mods":
                        {
                            "view": "default",
                            "border": "all"
                        },
                        "mix":
                        [
                            {
                                "block": "theme",
                                "mods":
                                {
                                    "color": "project-brand",
                                    "size": "default",
                                    "space": "default",
                                    "gap": "small"
                                }
                            },
                            {
                                "block": "grid",
                                "mods":
                                {
                                    "m-columns": "10",
                            "col-gap": "two-thirds",
                            "row-gap": "half"
                                }
                            }
                        ],
                        "content":
                        {
                            "block": "card",
                            "elem": "content",
                            "elemMods":
                            {
                                "vertical-align": "center",
                                "distribute": "center",
                                "space-a": "l"
                            },
                            "content":
                            [
                                {
                                    "block": "text",
                                    "mods":
                                    {
                                        "type": "h2",
                                        "view": "primary",
                                        "size": "s"
                                    }
                                },
                                {
                                    "block": "text",
                                    "mods":
                                    {
                                        "type": "p",
                                        "view": "secondary",
                                        "size": "s"
                                    },
                                    "content":
                                    {
                                        "block": "text",
                                        "elem": "word",
                                        "elemMods":
                                        {
                                            "width": "s"
                                        }
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "block": "grid",
                    "elem": "fraction",
                    "elemMods":
                    {
                        "m-col": "4"
                    },
                    "content":
                    [
                        {
                            "block": "form",
                            "content": [
                                {
                                        "block": "form",
                                        "elem": "label",
                                        "content": {
                                                "block": "text",
                                                "mods": { "size": "l" }
                                        }
                                },
                                { "block": "input", "mods": { "size": "l" } },
                                { "block": "button", "mods": { "size": "xl" } }
                            ]
                        },
                        {
                            "block": "form",
                            "content": [
                                {
                                        "block": "form",
                                        "elem": "label",
                                        "content": {
                                                "block": "text",
                                                "mods": { "size": "l" }
                                        }
                                },
                                { "block": "input", "mods": { "size": "l" } },
                                { "block": "button", "mods": { "size": "xl" } }
                            ]
                        },
                        {
                            "block": "form",
                            "content": {
                                "block": "form",
                                "elem": "content",
                                "content": { "block": "input", "mods": { "size": "l" } },
                                "mix": [{ "block": "form", "elem": "item", "elemMods": {  "space-v": "xxl" } }]
                            }
                        },
                        {
                            "block": "form",
                            "content": {
                                "block": "form",
                                "elem": "content",
                                "content": { "block": "input", "mods": { "size": "l" } },
                                "mix": [{ "block": "form", "elem": "item", "elemMods": {  "space-v": "xl" } }]
                            }
                        },
                        {
                            "block": "form",
                            "content": {
                                "block": "form",
                                "elem": "content",
                                "content": { "block": "input", "mods": { "size": "l" } },
                                "mix": [{ "block": "form", "elem": "item", "elemMods": {  "space-h": "xxl" } }]
                            }
                        }
                    ]
                },
                {
                    "block": "grid",
                    "elem": "fraction",
                    "elemMods":
                    {
                        "m-col": "2"
                    }
                }
            ]
		}
	}
}`
