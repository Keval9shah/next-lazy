import {Head} from "next/document";

// stops preloading of code-split chunks
class LazyHead extends Head {
    getDynamicChunks(files) {
      const dynamicScripts = super.getDynamicChunks(files);
      try {
        // get chunk manifest from loadable
        const loadableManifest = __non_webpack_require__(
          '../../react-loadable-manifest.json',
        );
        // search and filter modules based on marker ID
        const chunksToExclude = Object.values(loadableManifest).filter(
          manifestModule => {return manifestModule?.id?.includes?.('xyz') || false}
        );
        // console.log('chunkstoExclude',chunksToExclude);
        const excludeMap = chunksToExclude?.reduce?.((acc, chunks) => {
          if (chunks.files) {
            acc.push(...chunks.files);
          }
          return acc;
        }, []);
        const filteredChunks = dynamicScripts?.filter?.(
          script => !excludeMap?.includes(script?.key),
        );

        return filteredChunks;
      } catch (e) {
        // if it fails, return the dynamic scripts that were originally sent in
        return dynamicScripts;
      }
    }
  }
    export default LazyHead;