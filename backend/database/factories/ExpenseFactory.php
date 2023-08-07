<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Exepnse>
 */
class ExpenseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence,
            'dueDate' => $this->faker->dateTimeBetween('2021-01-01', '2023-12-31'),
            "currency" => $this->faker->currency,
            'amount' => $this->faker->numberBetween(100, 1000),
            'payed' => $this->faker->boolean,
        ];
    }
}
