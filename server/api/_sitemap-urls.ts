
export default defineEventHandler(async () => {
    const ingredients: any = all

    const bases = ingredients.filter((i: any) => i.type === 'base')
    const proteins = ingredients.filter((i: any) => i.type === 'protein')
    const vegetables = ingredients.filter((i: any) => i.type === 'vegetable')

    const onePlateRepices =  bases.flatMap((base: any) => {
        return proteins.flatMap((protein: any) => {
            return vegetables.map((vegetable: any) => {
                return {
                    loc: `/recipe-${base.namedId}-${protein.namedId}-${vegetable.namedId}`,
                    lastmod: new Date().toISOString()
                }
            })
        })
    })


    const baseRecipes =  bases.flatMap((base: any) => {
        return {
            loc: `/recipes-using-${base.namedId}`,
            lastmod: new Date().toISOString()
        }
    })
    const proteinRecipes =  proteins.flatMap((protein: any) => {
                return {
                    loc: `/recipes-using-${protein.namedId}`,
                    lastmod: new Date().toISOString()
                }
    })
    const vegetableRecipes =  vegetables.flatMap((vegetable: any) => {
                return {
                    loc: `/recipes-using-${vegetable.namedId}`,
                    lastmod: new Date().toISOString()
                }
    })

    const basesAndProteinRecipes =  bases.flatMap((base: any) => {
        return proteins.flatMap((protein: any) => {
                return {
                    loc: `/recipes-with-${base.namedId}-and-${protein.namedId}`,
                    lastmod: new Date().toISOString()
                }
        })
    })

    const basesAndVegetablesRecipes =  bases.flatMap((base: any) => {
        return vegetables.flatMap((vegetable: any) => {
                return {
                    loc: `/recipes-with-${base.namedId}-and-${vegetable.namedId}`,
                    lastmod: new Date().toISOString()
                }
        })
    })

    const proteinsAndVegetablesRecipes =  bases.flatMap((base: any) => {
        return proteins.flatMap((protein: any) => {
                return {
                    loc: `/recipes-with-${base.namedId}-and-${protein.namedId}`,
                    lastmod: new Date().toISOString()
                }
        })
    })

    return onePlateRepices.concat(baseRecipes).concat(proteinRecipes).concat(vegetableRecipes).concat(basesAndProteinRecipes).concat(basesAndVegetablesRecipes).concat(proteinsAndVegetablesRecipes)
  })
  