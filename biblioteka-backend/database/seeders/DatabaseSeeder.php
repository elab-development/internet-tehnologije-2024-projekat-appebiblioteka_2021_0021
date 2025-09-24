<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $this->call(GradSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(ZanrSeeder::class);
        $this->call(KnjigaSeeder::class);
        $this->call(UserKnjigaSeeder::class);
        $this->call(PretplataSeeder::class);
    }
}
