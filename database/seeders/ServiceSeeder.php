<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;
use Illuminate\Http\File;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ServiceSeeder extends Seeder
{
    private Carbon $date;
    private string $iconPath;
    private int $number = 1;
    private array $files;

    public function __construct()
    {
        $this->date = Carbon::now();
        $this->iconPath = resource_path() . '/js/images/service/';
        $this->getIcon();
    }

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->dropStorage();

        Service::query()->insert([
            [
                'title' => 'Passende Kandidaten finden',
                'description' => 'Mitarbeiter finden -  So funktioniert´s. Erfahren Sie mehr über unseren Stellenanzeigen.',
                'icon' => null,
                'created_at' => $this->date,
                'updated_at' => $this->date
            ],
            [
                'title' => 'WORKBERRY HR-Tipps',
                'description' => 'Vertiefen und erweitern Sie Ihr Wissen durch die vielfältigen Studien und Blog-Beiträge, die wir bereitstellen.',
                'icon' => null,
                'created_at' => $this->date,
                'updated_at' => $this->date
            ],
            [
                'title' => 'Hilfe & Schullungen',
                'description' => 'Hier finden Sie Antworten auf alle Ihre Fragen über Nutzung von WORKBERRY Jobbörse.',
                'icon' => null,
                'created_at' => $this->date,
                'updated_at' => $this->date
            ],
        ]);

        Service::query()->lazy()->each(function ($service) {
            $service->icon = $this->getFile();
            $service->save();
        });
    }

    private function getIcon(): void
    {
        $this->files = scandir($this->iconPath);
        array_splice($this->files, 0, 2);
    }

    private function getFile(): string | null
    {
        if (count($this->files) === 0) {
            return null;
        }

        if ($this->number === 5) {
            $this->number = 1;
        }

        $file = 'icon' . $this->number . '.svg';
        $filePath = $this->iconPath . '/' . $file;

        if (!file_exists($filePath)) {
            return null;
        }

        $newFileName = Str::uuid() . '.svg';
        $path = Storage::putFileAs('images', new File($filePath), $newFileName);
        $this->number++;

        return $path;
    }

    private function dropStorage(): void
    {
        $files = Storage::files('images');
        Storage::delete($files);
    }
}
