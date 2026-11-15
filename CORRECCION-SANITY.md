# Corrección de Sanity Studio y configuración de pnpm

## Error `TagIcon`

Se quitó la importación de `TagIcon` desde `@sanity/icons` y la propiedad `icon` del schema `servicio`. El icono es opcional en los tipos de documento de Sanity; el schema conserva sus campos y validaciones. Esto resuelve el error de exportación tanto en `pnpm studio` como en `pnpm studio:deploy`.

## Configuración pnpm

Se movió `pnpm.overrides.hono` desde `package.json` a `pnpm-workspace.yaml`, que es la ubicación de configuración utilizada por pnpm 11+. También se trasladó `node-linker=hoisted` desde `.npmrc` a `nodeLinker: hoisted` en `pnpm-workspace.yaml`; de este modo pnpm conserva el modo hoisted y npm/npx deja de advertir que `node-linker` es una configuración desconocida.

## Pasos después de reemplazar los archivos

```bash
pnpm install
pnpm studio
```

Cuando el Studio abre correctamente:

```bash
pnpm studio:deploy
```

Los 39 documentos que ya se importaron al dataset `production` no necesitan importarse nuevamente. La importación anterior terminó correctamente.
