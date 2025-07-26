# scripts/Generate-Favicons.ps1

# 1. Locate paths relative to this script
$scriptDir   = Split-Path -Parent $MyInvocation.MyCommand.Definition
$projectRoot = Resolve-Path (Join-Path $scriptDir "..")
$publicDir   = Join-Path $projectRoot "public"
$srcIco      = Join-Path $publicDir "favicon.ico"    # <-- your original 500×500
$destDir     = Join-Path $publicDir "favicons"

# 2. Sizes you want
$sizes = 16,32,48,180,192,512

# 3. Ensure ImageMagick’s 'magick' is in your PATH
if (-not (Get-Command magick -ErrorAction SilentlyContinue)) {
    Write-Error "Cannot find 'magick' in your PATH. Please install ImageMagick and ensure 'magick' is available."
    exit 1
}

# 4. Create the output directory if it doesn't exist
if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir | Out-Null
    Write-Host "Created directory: $destDir"
}

# 5. Generate PNGs at each size
foreach ($size in $sizes) {
    $outPng = Join-Path $destDir ("favicon-{0}x{0}.png" -f $size)
    magick $srcIco -resize "${size}x${size}" $outPng
    Write-Host "Generated PNG → $outPng"
}

# 6. Bundle the 16×16, 32×32, 48×48 into a multi‐size ICO
$ico16 = Join-Path $destDir "favicon-16x16.png"
$ico32 = Join-Path $destDir "favicon-32x32.png"
$ico48 = Join-Path $destDir "favicon-48x48.png"
$outIco = Join-Path $destDir "favicon.ico"

magick $ico16 $ico32 $ico48 $outIco
Write-Host "Bundled multi-size ICO → $outIco"
