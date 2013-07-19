<?php
/**
 * @file
 * question_bank.features.inc
 */

/**
 * Implements hook_node_info().
 */
function question_bank_node_info() {
  $items = array(
    'questions' => array(
      'name' => t('Questions'),
      'base' => 'node_content',
      'description' => t('Question Bank.'),
      'has_title' => '1',
      'title_label' => t('Question'),
      'help' => '',
    ),
  );
  return $items;
}
