export type Recipe = {
    name: string
    slug: string
    ingredients: string[]
    recipe: string[]
}

export type RecipeList = {
    recipes: Recipe[]
}

export const recipes = [
    {
        name: 'Havrekjeks 🍪',
        slug: '/havrekjeks',
        ingredients: [
            '500g mel',
            '500g havregryn',
            '150g kokesjokolade',
            '2ts vaniljesukker',
            '150g smør',
            '100g sukker',
            '1,5ts bakepulver',
            '1 klype salt',
        ],
        recipe: ['Hello world', 'Hello bananan', 'Small pockets'],
    },
    {
        name: 'Chocolate chip cookies 🍪',
        slug: '/cookies',
        ingredients: [
            '170g usaltet smør',
            '200g brunt sukker',
            '100g sukker',
            '3g havsalt',
            '6g vaniljesukker',
            '1 egg',
            '1 eggeplomme',
            '200g mel',
            '4g (0.5ts) natron',
            '225g hakket mørk sjokolade',
            'havsalt til topping',
        ],
        recipe: ['Hello world', 'Hello bananan', 'Small pockets'],
    },
    {
        name: 'Amerikanske pannekaker 🥞',
        slug: '/amerikanske-pannekaker',
        ingredients: [
            '370g melk',
            '1 egg',
            '300g mel',
            '60g sukker',
            '4g salt',
            '1g natron',
            '12g bakepulver',
            '21g smør',
        ],
        recipe: ['Hello world', 'Hello bananan', 'Small pockets'],
    },
    {
        name: 'Sylte hva som helst 🥒',
        slug: '/sylting',
        ingredients: ['50% vann', '50% eddik', '2% sukker', '1-2% salt'],
        recipe: ['Hello world', 'Hello bananan', 'Small pockets'],
    },
    {
        name: 'Bao buns 🥙',
        slug: '/bao-buns',
        ingredients: [
            '600g mel',
            '7g tørrgjær',
            '6g bakepulver',
            '3g salt',
            '40g sukker',
            '360g helmelk (ca. 37 grader)',
        ],
        recipe: ['Hello world', 'Hello bananan', 'Small pockets'],
    },
    {
        name: 'Tortilla 🌯',
        slug: '/tortilla',
        ingredients: ['345g mel', '6g salt', '6g bakepulver', '33g fett (eks. olje)'],
        recipe: ['Hello world', 'Hello bananan', 'Small pockets'],
    },
    {
        name: '32 boller 🍑',
        slug: '/boller',
        ingredients: ['1L melk', '1,5kg mel', '300g smør', '250g melis', '100g gjær (fersk)', '0,5ts kardemomme'],
        recipe: ['Hello world', 'Hello bananan', 'Small pockets'],
    },
]
