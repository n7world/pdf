const fs = require('fs')

const sections = [
    'title_page',
    'table_of_contents',
    'license',
    'introduction',
    'chapter-1',
    'chapter-2',
    'angara',
    'asari',
    'batarian',
    'drell',
    'elcor',
    'geth',
    'hanar',
    'human',
    'krogan',
    'prothean',
    'quarian',
    'salarian',
    'turian',
    'volus',
    'vorcha',
    'chapter-3',
    'adept',
    'engineer',
    'infiltrator',
    'sentinel',
    'soldier',
    'vanguard',
    'chapter-4',
    'chapter-5',
    'chapter-6',
    'chapter-7',
    'chapter-8',
    'chapter-9',
    'chapter-10',
    'chapter-11',
    'chapter-12',
    'chapter-13',
    'appendix-a-armor-sets',
    'appendix-b-armor-mods',
    'appendix-c-weapons',
    'appendix-d-weapon-mods',
    'appendix-e-grenades-mines',
    'appendix-f-omni-tool-programs',
    'appendix-g-conditions',
    'appendix-h-bestiary'
];

const text = []
for (const section of sections) {
    const contents = fs.readFileSync(`./sections/${section}.md`)
    text.push(contents)
}

fs.writeFileSync(`./full-pdf.md`, text.join("\r\n\r\n\\page\r\n\r\n"))
