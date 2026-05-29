from textstat import textstat

def analyze_hook_readability(text: str):
    """
    Analyzes the readability metrics of a text block 
    to ensure it matches the viral social media sweet spot.
    """
    # Calculate grade levels using the exact formulas Hemingway App uses
    fk_grade = textstat.flesch_kincaid_grade(text)
    ari_grade = textstat.automated_readability_index(text)
    
    # Core stats
    word_count = textstat.lexicon_count(text, removepunct=True)
    sentence_count = textstat.sentence_count(text)
    
    print("=" * 40)
    print("📊 CONTENT ENGINE READABILITY REPORT")
    print("=" * 40)
    print(f"📝 Total Words:     {word_count}")
    print(f"⏳ Sentences:       {sentence_count}")
    print(f"🎓 Flesch-Kincaid:  Grade {fk_grade}")
    print(f"🤖 Automated Index: Grade {ari_grade}")
    print("-" * 40)
    
    # Evaluation Logic (Target Sweet Spot: 6.0 to 8.5)
    target_grade = (fk_grade + ari_grade) / 2
    
    if target_grade > 12.0:
        print("🚨 STATUS: TOO ACADEMIC (Grade 12+)")
        print("👉 Fix: Break your dense blocks into 1-2 sentence paragraphs. Use simpler words.")
    elif target_grade > 8.5:
        print("⚠️ STATUS: SLIGHTLY HEAVY (Grade 9-12)")
        print("👉 Fix: Shorten sentences containing multiple clauses.")
    elif 6.0 <= target_grade <= 8.5:
        print("🔥 STATUS: OPTIMAL VIRAL FLOW (Grade 6-8)")
        print("👉 Result: Perfect for fast scrolling. Keep this structure.")
    else:
        print("👶 STATUS: TOO SIMPLE (Below Grade 6)")
        print("👉 Fix: Infuse your deeper terms back in (e.g., 'intermittent reinforcement').")
    print("=" * 40)

# --- TEST RUN ---
draft_1 = """
We don't fall for emotionally unavailable people because we lack self-respect; we fall for them because our nervous system mistakes uncertainty for chemistry. When someone pulls away, it triggers an instant drop in dopamine, followed by a massive spike the moment they throw you a crumb of validation.
"""

draft_2 = """
Falling for an emotionally unavailable person isn't a lack of self-respect. It happens because your nervous system mistakes uncertainty for chemistry.
When someone pulls away, your dopamine drops. The moment they throw you a crumb of validation, it spikes.
"""

print("Testing Dense Draft 1:")
analyze_hook_readability(draft_1)

print("\nTesting Optimized Draft 2:")
analyze_hook_readability(draft_2)