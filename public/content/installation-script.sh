#!/bin/bash

currentDir=$(pwd)
repoUrl="https://github.com/frontend-infra/adina/archive/refs/heads/main.zip"
zipFilePath="$currentDir/adina.zip"
extractedFolder="$currentDir/adina-main"

curl -L -o $zipFilePath $repoUrl
unzip -q $zipFilePath -d $currentDir

CopyFileWithRenameIfExists() {
    sourcePath=$1
    destinationPath=$2

    if [ -f "$destinationPath" ]; then
        extension="${destinationPath##*.}"
        baseName="${destinationPath%.*}"
        newFileName="${baseName}-adina.$extension"
        destinationPath="$newFileName"
    fi

    cp "$sourcePath" "$destinationPath"
}

if [ -f "$extractedFolder/rspack.config.js" ]; then
    CopyFileWithRenameIfExists "$extractedFolder/rspack.config.js" "$currentDir/rspack.config.js"
fi

foldersToCopy=("public" "scripts" "src")

for folder in "${foldersToCopy[@]}"; do
    folderPath="$extractedFolder/$folder"

    if [ -d "$folderPath" ]; then
        find "$folderPath" -type f | while read file; do
            destinationPath="$currentDir${file#$extractedFolder}"
            destinationDir=$(dirname "$destinationPath")

            if [ ! -d "$destinationDir" ]; then
                mkdir -p "$destinationDir"
            fi
            
            CopyFileWithRenameIfExists "$file" "$destinationPath"
        done
    fi
done

rm -f $zipFilePath
rm -rf $extractedFolder

echo "Adina has been successfully integrated into your project. You still need to manually merge any files that have the '-adina' suffix."