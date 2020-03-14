<?php

use Illuminate\Database\Seeder;
use App\Contact;

class ContactsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Contact::truncate();
        $faker = \Faker\Factory::create();
        for ($i = 0; $i < 10; $i++) {
            Contact::create([
                'name'     => $faker->firstName,
                'last_name' => $faker->lastName,
                'phone'    => $faker->e164PhoneNumber,
                'email'    => $faker->unique()->safeEmail
            ]);
        }

    }
}
