$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$source = Resolve-Path (Join-Path $repoRoot "shinonome-body-peeling-src\out")
$target = Join-Path $repoRoot "shinonome-body-peeling"

if (-not ($target.StartsWith($repoRoot.Path))) {
  throw "Refusing to write outside repository: $target"
}

if (Test-Path $target) {
  Remove-Item -LiteralPath $target -Recurse -Force
}

New-Item -ItemType Directory -Force -Path $target | Out-Null
Copy-Item -Path (Join-Path $source "*") -Destination $target -Recurse -Force
