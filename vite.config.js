import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: { open: true, port: 5173 },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main:        resolve(__dirname, 'index.html'),
        nf404:       resolve(__dirname, '404.html'),
        implante:    resolve(__dirname, 'implante-dentario-uberaba/index.html'),
        ortodontia:  resolve(__dirname, 'ortodontia-uberaba/index.html'),
        clareamento: resolve(__dirname, 'clareamento-dental-uberaba/index.html'),
        lentes:      resolve(__dirname, 'lentes-de-contato-dental-uberaba/index.html'),
        canal:       resolve(__dirname, 'tratamento-de-canal-uberaba/index.html'),
        protese:     resolve(__dirname, 'protese-dentaria-uberaba/index.html'),
        odonto:      resolve(__dirname, 'odontopediatria-uberaba/index.html'),
        botox:       resolve(__dirname, 'toxina-botulinica-uberaba/index.html'),
        clinicageral: resolve(__dirname, 'clinica-geral-uberaba/index.html'),
        periodontia: resolve(__dirname, 'periodontia-uberaba/index.html'),
        cirurgia:    resolve(__dirname, 'cirurgia-oral-uberaba/index.html'),
      },
    },
  },
});
