# icy.computer website

Check it out here: [icy.computer](https://icy.computer)

![](https://files.catbox.moe/sgpr53.png)

Very basic astro code that provides a nice card view of all my projects :)

Pnpm builds everything into a static site, so anything capable of hosting http is able to deploy the site. Personally I use Caddy file_server to serve everything statically.

It includes a nice header and footer. To add more items go into `src/Components/ProductGrid.astro` and edit `featuredProducts`.

Feel free to fork it or anything.

## Building

Requirements: pnpm

```
$ pnpm install
$ pnpm build
```

Now you can find the compiled static site in the `build` folder.

