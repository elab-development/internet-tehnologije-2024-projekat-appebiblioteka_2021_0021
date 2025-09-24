<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Zanr;

class KnjigaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $zanroviKnjige=[
            'Triler',
            'Drama',
            'Komedija',
            'Romantika',
            'Akcija',
            'Naučna fantastika',
            'Fantastika',
            'Horor',
            'Misterija',
            'Biografija',
            'Istorija',
            'Poezija',
        ];
        foreach($zanroviKnjige as $zanr){
            Zanr::create(['nazivZanra'=>$zanr]);
        }
    }


}
