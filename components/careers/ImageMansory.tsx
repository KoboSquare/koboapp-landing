import Image from 'next/image'
import React from 'react'

type MasonryImage = {
    src: string
    alt?: string
    className?: string
}

type Props = {
    images?: MasonryImage[]
    rounded?: string // tailwind rounding, e.g. "rounded-2xl"
}

// Default demo content (7 images). Replace with your assets.
const DEFAULT_IMAGES: MasonryImage[] = [
    { src: 'https://o7y30yptvf.ufs.sh/f/5dyupQ86ApvTubS49pGvyT0VEWRgDkPbcFCw8SIUqYtjendG', alt: 'img-1' },
    { src: 'https://o7y30yptvf.ufs.sh/f/5dyupQ86ApvTubS49pGvyT0VEWRgDkPbcFCw8SIUqYtjendG', alt: 'img-2' },
    { src: 'https://o7y30yptvf.ufs.sh/f/5dyupQ86ApvTubS49pGvyT0VEWRgDkPbcFCw8SIUqYtjendG', alt: 'img-3' },
    { src: 'https://o7y30yptvf.ufs.sh/f/5dyupQ86ApvTubS49pGvyT0VEWRgDkPbcFCw8SIUqYtjendG', alt: 'img-4' },
    { src: 'https://o7y30yptvf.ufs.sh/f/5dyupQ86ApvTubS49pGvyT0VEWRgDkPbcFCw8SIUqYtjendG', alt: 'img-5' },
    { src: 'https://o7y30yptvf.ufs.sh/f/5dyupQ86ApvTubS49pGvyT0VEWRgDkPbcFCw8SIUqYtjendG', alt: 'img-6' },
    { src: 'https://o7y30yptvf.ufs.sh/f/5dyupQ86ApvTubS49pGvyT0VEWRgDkPbcFCw8SIUqYtjendG', alt: 'img-7' },
]

// Layout mapping to 4 columns on md+ screens to match the Figma reference.
// Each array entry contains the indices of images placed in that column (top-to-bottom).
// We also add an offset class on the very first tile to visually "center" it in its column.
const DEFAULT_COLUMN_MAP: number[][] = [
    [0],
    // col 2: two stacked images
    [1, 2],
    // col 3: two stacked images (will be pushed down via margin-top)
    [3, 4],
    // col 4: two stacked images
    [5, 6],
]

function ImageMansory({ images = DEFAULT_IMAGES, rounded = 'rounded-xl' }: Props) {
    // Safety: enforce exactly 7 items if more provided.
    const items = images.slice(0, 7)
    // Build 4 columns map from provided images when count is 7.
    const columnMap = DEFAULT_COLUMN_MAP

    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {columnMap.map((col, colIdx) => (
          <div
            key={colIdx}
            className={`grid gap-6 ${colIdx === 2 ? 'mt-6 md:mt-12' : ''}`}
          >
            {col.map((imgIdx, idxInCol) => {
              const item = items[imgIdx]
              if (!item) return null

              // Center single image in column 1; others default
              const offsetClass = colIdx === 0 ? 'md:self-center' : ''

              return (
                <div key={imgIdx} className={`relative aspect-square w-full overflow-hidden ${rounded} ${offsetClass}`}>
                  <Image
                    src={item.src}
                    alt={item.alt || ''}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className={`object-cover ${rounded} ${item.className ?? ''}`}
                  />
                </div>
              )
            })}
          </div>
        ))}
      </div>
    )
}

export default ImageMansory