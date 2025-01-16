$currentDir = Get-Location
$repoUrl = "https://github.com/frontend-infra/adina/archive/refs/heads/main.zip"
$zipFilePath = Join-Path -Path $currentDir -ChildPath "adina.zip"
$extractedFolder = Join-Path -Path $currentDir -ChildPath "adina-main"

Invoke-WebRequest -Uri $repoUrl -OutFile $zipFilePath
Expand-Archive -Path $zipFilePath -DestinationPath $currentDir

function Copy-FileWithRenameIfExists {
    param([string]$sourcePath, [string]$destinationPath)

    if (Test-Path -Path $destinationPath) {
        $extension = [System.IO.Path]::GetExtension($destinationPath)
        $baseName = [System.IO.Path]::GetFileNameWithoutExtension($destinationPath)
        $newFileName = "$baseName-adina$extension"
        $destinationPath = Join-Path -Path (Split-Path -Path $destinationPath -Parent) -ChildPath $newFileName
    }

    Copy-Item -Path $sourcePath -Destination $destinationPath -Force
}

if (Test-Path (Join-Path -Path $extractedFolder -ChildPath "rspack.config.js")) {
    Copy-FileWithRenameIfExists -sourcePath (Join-Path -Path $extractedFolder -ChildPath "rspack.config.js") -destinationPath (Join-Path -Path $currentDir -ChildPath "rspack.config.js")
}

$foldersToCopy = @("public", "scripts", "src")

foreach ($folder in $foldersToCopy) {
    $folderPath = Join-Path -Path $extractedFolder -ChildPath $folder

    if (Test-Path -Path $folderPath) {
        $files = Get-ChildItem -Path $folderPath -Recurse

        foreach ($file in $files) {
            $destinationPath = Join-Path -Path $currentDir -ChildPath $file.FullName.Substring($extractedFolder.Length).TrimStart("\")
            $destinationDir = Split-Path -Path $destinationPath -Parent

            if (-not (Test-Path -Path $destinationDir)) {
                New-Item -Path $destinationDir -ItemType Directory -Force
            }

            Copy-FileWithRenameIfExists -sourcePath $file.FullName -destinationPath $destinationPath
        }
    }
}

Remove-Item -Path $zipFilePath -Force
Remove-Item -Path $extractedFolder -Recurse -Force

Write-Host "Adina has been successfully integrated into your project. You still need to manually merge any files that have the '-adina' suffix."