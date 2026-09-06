const trenchCommands = {
    "/trench.code": "[CRITICAL OVERRIDE]: ZERO TRUNCATION. Output the exact, fully functional code block from start to finish. Do not use placeholders like '// rest of code'.",
    "/trench.raw": "[CRITICAL OVERRIDE]: RAW MODE. Drop all conversational filler, generic introductions, and apologies. Begin directly with the actionable solution.",
    "/trench.arch": "[CRITICAL OVERRIDE]: ARCHITECTURE MODE. Analyze the problem as a Senior Systems Engineer. Provide edge cases, structural breakdowns, and use Markdown Tables for comparisons.",
    "/trench.biz": "[CRITICAL OVERRIDE]: BUSINESS MODE. Avoid generic advice. Provide strict actionable items and KPIs in bullet points."
};

document.addEventListener('input', function(e) {
    let target = e.target;
    
    if (target.tagName.toLowerCase() === 'textarea' || target.isContentEditable) {
        let text = target.tagName.toLowerCase() === 'textarea' ? target.value : target.innerText;
        
        for (let cmd in trenchCommands) {
            if (text.includes(cmd)) {
                let newText = text.replace(cmd, trenchCommands[cmd]);
                
                if (target.tagName.toLowerCase() === 'textarea') {
                    target.value = newText;
                } else {
                    target.innerText = newText;
                }
                
                target.dispatchEvent(new Event('input', { bubbles: true }));
            }
        }
    }
}, true);
