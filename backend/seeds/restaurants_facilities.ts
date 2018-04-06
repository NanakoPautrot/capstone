import * as Knex from "knex";

exports.seed = (knex: Knex) => {
    return knex("restaurants_facilities").truncate()
        .then(() => {
            return knex('restaurants').select('id', 'name', 'cuisine', 'category')
                .then((data) => {
                    return data.reduce((result: any, restaurant: any) => {
                        if (restaurant.cuisine === 'American') {
                            if (restaurant.category === 'Food Court' || restaurant.category === 'Chocolate/Candy Shop' || restaurant.category === 'Mexican' || restaurant.category === 'Snack Shop & Deli') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Bar' || restaurant.category === 'Upper-floor Cafe') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                            } else if (restaurant.category === 'Cake' || restaurant.category === 'Food Wise Eateries' || restaurant.category === 'Steak House') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                            } else if (restaurant.category === 'Hotel Restaurant') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 3 });
                            } else if (restaurant.category === 'Pizza' || restaurant.category === 'Western Restaurant') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                            }
                        }
                        if (restaurant.cuisine === 'Australian' && (restaurant.category === 'Austalian' || restaurant.category === 'Steak House')) {
                            result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                            result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                        }
                        if (restaurant.cuisine === 'Australian' && restaurant.category === 'Western Restaurant') {
                            result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                            result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                        }
                        if (restaurant.cuisine === 'Beijing' && restaurant.category === 'Snack Shop & Deli') {
                            result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                        }

                        if (restaurant.cuisine === 'Belgian' && restaurant.category === 'Chocolate/Candy Shop') {
                            result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                            result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                        }
                        if (restaurant.cuisine === 'Belgian' && restaurant.category === 'Western Restaurant') {
                            result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                            result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                        }

                        // Test 2
                        if (restaurant.cuisine === 'British') {
                            if (restaurant.category === 'Bar' || restaurant.category === 'Western') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                            } else if (restaurant.category === 'Food Wise Eateries' || restaurant.category === 'Steak House') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                            }
                        }
                        if (restaurant.cuisine === 'Chiu Chow') {
                            if (restaurant.category === 'Cooked Food Center') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                            } else if (restaurant.category === 'Tea Restaurant') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                            } else if (restaurant.category === 'Hotel Restaurant') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 3 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                            }
                        }
                        if (restaurant.cuisine === 'Dutch' && restaurant.category === 'Dutch') {
                            result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                        }
                        if (restaurant.cuisine === 'Egyptian' && restaurant.category === 'Pizza') {
                            result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                            result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                        }

                        // Test 3
                        if (restaurant.cuisine === 'French') {
                            if (restaurant.category === 'All Day Breakfast' || restaurant.category === 'Fine Dining' || restaurant.category === 'Food Wise Eateries' || restaurant.category === 'International') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                            } else if (restaurant.category === 'Bar') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Chocolate/Candy Shop' || restaurant.category === 'Food Court' || restaurant.category === 'Outdoor') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Hotel Restaurant') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 3 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                            } else if (restaurant.category === 'Roast Meat' || restaurant.category === 'Upper-floor Cafe' || restaurant.category === 'Wine') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                            }
                        }
                        if (restaurant.category === 'Fujian' && restaurant.category === 'Food wise Eateries') {
                            result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                        }
                        if (restaurant.cuisine === 'German') {
                            if (restaurant.category === 'German') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                            } else if (restaurant.category === 'Bar') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Pizza') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Snack Shop & Deli') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                            }
                        }
                        if (restaurant.cuisine === 'Guangdong') {
                            if (restaurant.category === 'Club House') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Food Court' || restaurant.category === 'Food Wise Eateries') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                            } else if (restaurant.category === 'Hotel Restaurant') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 3 });
                            } else if (restaurant.category === 'Social Enterprise Restaurant') {

                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            }
                        }

                        // Test 4
                        if (restaurant.cuisine === 'Hakka' && restaurant.category === 'Snack Shop & Deli') {
                            result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                        }
                        if (restaurant.cuisine === 'Hong Kong Style') {
                            if (restaurant.category === 'All-you-can-eat ') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Bar ') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                            } else if (restaurant.category === 'BBQ Ground ' || restaurant.category === 'Chinese BBQ') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Chocolate/Candy Shop ' || restaurant.category === 'Food Court' || restaurant.category === 'Ice cream/Yogurt') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Club House ') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Coffee Shop ' || restaurant.category === 'Seafood Restaurant' || restaurant.category === 'Upper-floor Cafe') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                            } else if (restaurant.category === 'Food Wise Eateries ' || restaurant.category === 'Hong Kong Style' || restaurant.category === 'Snack Shop & Deli' || restaurant.category === 'Social Enterprise Restaurant') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                            } else if (restaurant.category === 'Hotel Restaurant ') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 3 });
                            } else if (restaurant.category === 'Karaoke ' || restaurant.category === 'Outdoor') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            }
                        }
                        if (restaurant.cuisine === 'Hunan' && restaurant.category === 'Stir-Fry') {
                            result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                        }
                        if (restaurant.cuisine === 'Indian') {
                            if (restaurant.category === 'Food Wise Eateries' || restaurant.category === 'Snack Shop & Deli') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                            } else if (restaurant.category === 'Bar') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 })
                            }
                        }
                        if (restaurant.cuisine === 'Indonesian' && restaurant.category === 'Outdoor') {
                            result.push({ restaurant_id: restaurant.id, facility_id: 4 })
                        }
                        if (restaurant.cuisine === 'International') {
                            if (restaurant.category === 'Bar' || restaurant.category === 'Coffee Shop' || restaurant.category === 'Oyster Bar' || restaurant.category === 'Upper-floor Cafe' || restaurant.category === 'Wine') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                            } else if (restaurant.category === 'BBQ Ground' || restaurant.category === 'Club House' || restaurant.category === 'Karaoke' || restaurant.category === 'Korean BBQ' || restaurant.category === 'Outdoor') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Chocolate/Candy Shop' || restaurant.category === 'Food Court' || restaurant.category === 'Ice Cream/Yogurt') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Food Wise Eateries' || restaurant.category === 'Snack Shop & Deli' || restaurant.category === 'Social Entreprise Restaurant') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                            }
                        } if (restaurant.cuisine === 'Irish' && restaurant.category === 'Bar') {
                            result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                        }
                        if (restaurant.cuisine === 'Italian') {
                            if (restaurant.category === 'All Day Breakfast') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                            } else if (restaurant.category === 'Bar' || restaurant.category === 'Coffee Shop' || restaurant.category === 'Upper-floor Cafe' || restaurant.category === 'Wine') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                            } else if (restaurant.category === 'Food Court' || restaurant.category === 'Ice Cream/yogurt') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Hotel Restaurant') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 3 });
                            }
                        }
                        if (restaurant.cuisine === 'Japanese') {
                            if (restaurant.category === 'Chocolate/Candy Shop' || restaurant.category === 'Food Court' || restaurant.category === 'Ice Cream/yogurt') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Bar' || restaurant.category === 'Oyster Bar' || 'Sushi Bar' || restaurant.category === 'Tea House' || restaurant.category === 'Upper-floor Cafe') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                            } else if (restaurant.category === 'Food wise Eateries' || restaurant.category === 'Snack Shop Deli') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });

                            }
                        }

                        // Test 6
                        if (restaurant.cuisine === 'Jingchuanhu' && restaurant.category === 'BBQ Ground') {
                            result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                        }

                        if (restaurant.cuisine === 'Korean') {
                            if (restaurant.category === 'All-you-can-eat' || restaurant.category === 'Chocolate/Candy Shop' || restaurant.category === 'Food Court') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Bar' || restaurant.category === 'Coffee Shop' || restaurant.category === 'Upper-floor Cafe' || restaurant.category === 'Wine') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });

                            } else if (restaurant.category === 'Koran BBQ' || restaurant.category === 'Outdoor') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Snack Shop & Deli') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                            }
                        }
                        if (restaurant.cuisine === 'Malaysia' && restaurant.category === 'Upper-floor Cafe') {
                            result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                        }
                        if (restaurant.cuisine === 'Mediterranean' && (restaurant.category === 'Bar' || restaurant.category === 'Pizza')) {
                            result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                        }

                        if (restaurant.cuisine === 'Middle Easten') {
                            if (restaurant.category === 'Chocolate/Candy Shop') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Upper-floor Cafe') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                            }
                        }

                        if (restaurant.cuisine === 'Northeastern') {
                            if (restaurant.category === 'Food Wise Eateries') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Stir-Fry') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            }
                        }
                        if (restaurant.cuisine === 'Peruvian' && restaurant.category === 'Oyster Bar') {
                            result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                        }
                        if (restaurant.cuisine === 'Shanghai') {
                            if (restaurant.category === 'Chocolate/Candy Shop') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Snack Shop & Deli') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                            } else if (restaurant.category === 'Tea House') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                            }
                        }
                        if (restaurant.cuisine === 'Sichuan') {
                            if (restaurant.category === 'Bar') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                            } else if (restaurant.category === 'Food Court') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'BBQ Ground') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            }
                        }
                        if (restaurant.cuisine === 'Singaporean') {
                            if (restaurant.category === 'Coffee Shop' || restaurant.category === 'Tea House') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                            } else if (restaurant.category === 'Food Court') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            }
                        }
                        if (restaurant.cuisine === 'Spanish') {
                            if (restaurant.category === 'Bar' || restaurant.category === 'Coffee Shop' || restaurant.category === 'Upper-floor Cafe' || restaurant.category === 'Wine') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                            } else if (restaurant.category === 'Hotel Restaurant') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 3 });
                            }
                        }
                        if (restaurant.cuisine === 'Taiwan') {
                            if (restaurant.category === 'Coffee Shop' || restaurant.category === 'Tea House' || restaurant.category === 'Upper-floor House') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                            } else if (restaurant.category === 'Food Court' || restaurant.category === 'Ice Cream/yogurt') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });

                            }
                        }
                        if (restaurant.cuisine === 'Thai') {
                            if (restaurant.category === 'Bar' || restaurant.category === 'Seafood Restaurant' || restaurant.category === 'Tea House' || restaurant.category === 'Upper-floor Cafe') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                            } else if (restaurant.category === 'BBQ' || restaurant.category === 'Outdoor') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Food Court') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Hotel Restaurant') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 3 })
                            } else if (restaurant.category === 'Food Wise Eateries' || restaurant.category === 'Takeaway') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                            }
                        }
                        if (restaurant.cuisine === 'Vietnamese') {
                            if (restaurant.category === 'Bar' || restaurant.category === 'Coffee Shop') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                            } else if (restaurant.category === 'Food Wise Eateries' || restaurant.category === 'Snack Shop & Deli') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 })
                            } else if (restaurant.category === 'Food Court') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Hotel Restaurant') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 3 });
                            }
                        }
                        if (restaurant.cuisine === 'Village Food' && restaurant.category === 'Social Enterprise Restaurant') {
                            result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                            result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                        }
                        if (restaurant.cuisine === 'Western') {
                            if (restaurant.category === 'BBQ Ground' || restaurant.category === 'Chocolate/Candy Shop' || restaurant.category === 'Food Court' || restaurant.category === 'Ice Cream/yogurt') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });
                            } else if (restaurant.category === 'Bar' || restaurant.category === 'Coffee Shop' || restaurant.category === 'Karaoke' || restaurant.category === 'Oyster Bar') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                            } else if (restaurant.category === 'BBQ' || restaurant.category === 'Club House') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 4 });

                            } else if (restaurant.category === 'Hotel Restaurant') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                                result.push({ restaurant_id: restaurant.id, facility_id: 3 });
                            } else if (restaurant.category === 'Food Wise Eateries' || restaurant.category === 'Snack Shop & Deli' || restaurant.category === 'Social Enterprise Restaurant') {
                                result.push({ restaurant_id: restaurant.id, facility_id: 1 });
                            }
                        }


                        //     if(restaurant.category === 'Food Court') {
                        //         result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                        //     }
                        //     if (restaurant.category === 'Hotel Restaurant') {
                        //         result.push({ restaurant_id: restaurant.id, facility_id: 2 });
                        //         result.push({ restaurant_id: restaurant.id, facility_id: 3 });
                        //     }
                        return result;
                    }, []);
                })
                .then((data) => {
                    return knex("restaurants_facilities").insert(data);
                });
        });
};
