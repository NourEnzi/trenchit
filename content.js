const trenchCommands = {
    "/trench.code": "For this project task, please output the complete, production-ready code from start to finish without any placeholders or shortened comments.",
    "/trench.raw": "Please provide the direct technical solution immediately without any conversational filler, introductory remarks, or polite summaries.",
    "/trench.arch": "Analyze this technical problem as a Senior Systems Engineer, focusing on edge cases, data structures, and comparative markdown tables.",
    "/trench.biz": "Provide the response strictly as structured bullet points containing actionable items and clear key performance indicators."
};

document.addEventListener('keyup', function(e) {
    if (e.code === 'Space') {
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
    }
}, true);