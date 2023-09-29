# Astro Audionaut

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)

Astro Audionaut is an audio player built with [Astro](https://astro.build).

## Installation

```bash
git clone https://github.com/AREA44/astro-audionaut
cd astro-audionaut
pnpm install
pnpm dev
```

Open your web browser and navigate to http://localhost:4321

## Usage

You have multiple options for hosting your audio files for Astro Audionaut:

1. In your own codebase: You can host your audio files directly within the `public/audio` folder. Simply place your audio files in this folder and reference them within your code.

2. Cloud storage solutions: You can also host your audio files using popular cloud storage solutions such as Dropbox, Google Drive, or Cloudinary. Simply upload your audio files to your chosen cloud storage platform and obtain a public URL for each audio file.

Once you have hosted your audio files using any of the above methods, you need to specify the public URL of each audio file in the `audioUrl` field. This field allows Astro Audionaut to retrieve and play the audio file during the audio play.

## License

This project is licensed under the [MIT License](LICENSE).

## Credits

Astro Audionaunt is inspired by the [astropod](https://github.com/manuelernestog/astropod) project. Please consider starring the project, sharing it on social media.
